/* ==========================================================
   app.js — Main Game Controller
   Navigation, scoring, timer, hints, state management
   ========================================================== */

const App = (() => {
    // ---- State ----
    let currentPuzzle = null;
    let currentPuzzleIndex = -1;
    let timerInterval = null;
    let elapsedSeconds = 0;
    let attempts = 0;
    let hintUsed = false;
    let gameState = {}; // { [puzzleId]: { completed, stars, score, bestTime } }
    let activeFilter = 'all';

    // ---- Initialization ----
    function init() {
        loadState();
        DragDrop.init();
        renderPuzzleGrid();
        updateProgress();
        createParticles();
    }

    // ---- LocalStorage ----
    function loadState() {
        try {
            const saved = localStorage.getItem('devops-puzzle-state');
            if (saved) gameState = JSON.parse(saved);
        } catch (e) {
            gameState = {};
        }
    }

    function saveState() {
        try {
            localStorage.setItem('devops-puzzle-state', JSON.stringify(gameState));
        } catch (e) { }
    }

    // ---- Screen Navigation ----
    function showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');

        if (screenId === 'screen-select') {
            renderPuzzleGrid();
            updateProgress();
        }
    }

    // ---- Particles (Welcome Screen) ----
    function createParticles() {
        const container = document.getElementById('particles');
        if (!container) return;
        for (let i = 0; i < 30; i++) {
            const p = document.createElement('div');
            p.classList.add('particle');
            p.style.left = Math.random() * 100 + '%';
            p.style.animationDelay = Math.random() * 6 + 's';
            p.style.animationDuration = (4 + Math.random() * 4) + 's';
            const colors = ['var(--accent-blue)', 'var(--accent-purple)', 'var(--accent-cyan)'];
            p.style.background = colors[Math.floor(Math.random() * colors.length)];
            container.appendChild(p);
        }
    }

    // ---- Puzzle Grid ----
    function renderPuzzleGrid() {
        const grid = document.getElementById('puzzle-grid');
        if (!grid) return;
        grid.innerHTML = '';

        const filtered = activeFilter === 'all'
            ? PUZZLES
            : PUZZLES.filter(p => p.category === activeFilter);

        filtered.forEach(puzzle => {
            const state = gameState[puzzle.id] || {};
            const catClass = puzzle.category.toLowerCase();
            const diffClass = 'diff-' + puzzle.difficulty.toLowerCase();

            const card = document.createElement('div');
            card.className = `puzzle-card ${catClass} ${state.completed ? 'completed' : ''}`;
            card.onclick = () => startPuzzle(puzzle.id);

            card.innerHTML = `
                <div class="puzzle-card-header">
                    <span class="puzzle-number">#${String(puzzle.id).padStart(2, '0')}</span>
                    <span class="puzzle-category ${catClass}">${puzzle.category}</span>
                </div>
                <div class="puzzle-card-title">${puzzle.title}</div>
                <div class="puzzle-card-diff ${diffClass}">
                    <span class="diff-dot"></span> ${puzzle.difficulty}
                </div>
                <div class="puzzle-card-footer">
                    <div class="puzzle-stars">
                        ${[1, 2, 3].map(s => `<span class="star ${(state.stars || 0) >= s ? 'earned' : ''}">⭐</span>`).join('')}
                    </div>
                    <span class="puzzle-card-score">${state.score ? state.score + ' pts' : '—'}</span>
                </div>
            `;

            grid.appendChild(card);
        });
    }

    function filterPuzzles(filter) {
        activeFilter = filter;
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.filter === filter);
        });
        renderPuzzleGrid();
    }

    function updateProgress() {
        const completed = Object.values(gameState).filter(s => s.completed).length;
        const el = document.getElementById('progress-text');
        if (el) el.textContent = `${completed} / ${PUZZLES.length} completed`;
    }

    // ---- Start Puzzle ----
    function startPuzzle(puzzleId) {
        const puzzle = PUZZLES.find(p => p.id === puzzleId);
        if (!puzzle) return;

        currentPuzzle = puzzle;
        currentPuzzleIndex = PUZZLES.indexOf(puzzle);
        attempts = 0;
        hintUsed = false;
        elapsedSeconds = 0;

        // Set header
        document.getElementById('game-title').textContent = puzzle.title;
        const badge = document.getElementById('game-category');
        badge.textContent = puzzle.category;
        badge.className = 'game-category-badge ' + puzzle.category.toLowerCase();
        badge.style.cssText = getCategoryBadgeStyle(puzzle.category);

        // Set briefing
        document.getElementById('briefing-text').textContent = puzzle.description;
        document.getElementById('briefing-card').classList.remove('hidden');

        // Reset hint button
        const hintBtn = document.getElementById('btn-hint');
        hintBtn.classList.remove('used');
        document.getElementById('hint-text').textContent = puzzle.hint;

        // Render puzzle
        renderDropZones(puzzle);
        renderPoolCards(puzzle);

        // Show game screen
        showScreen('screen-game');

        // Start timer
        startTimer();
    }

    function getCategoryBadgeStyle(category) {
        const styles = {
            DevOps: `color: var(--accent-blue); background: rgba(88,166,255,0.1); border: 1px solid rgba(88,166,255,0.2);`,
            Git: `color: var(--accent-orange); background: rgba(240,136,62,0.1); border: 1px solid rgba(240,136,62,0.2);`,
            Middleware: `color: var(--accent-purple); background: rgba(188,140,255,0.1); border: 1px solid rgba(188,140,255,0.2);`
        };
        return styles[category] || '';
    }

    // ---- Render Drop Zones ----
    function renderDropZones(puzzle) {
        const container = document.getElementById('drop-zones');
        container.innerHTML = '';

        puzzle.correctOrder.forEach((_, i) => {
            if (i > 0) {
                const connector = document.createElement('div');
                connector.className = 'zone-connector';
                connector.textContent = '→';
                container.appendChild(connector);
            }

            const zone = document.createElement('div');
            zone.className = 'drop-zone';
            zone.dataset.slotIndex = i;
            zone.innerHTML = `
                <span class="zone-number">Step ${i + 1}</span>
                <span class="zone-placeholder">Drop here</span>
            `;

            // Register drop handlers
            DragDrop.makeDropZone(zone, (itemId, zoneEl) => handleDrop(itemId, zoneEl));
            DragDrop.makeTouchDropZone(zone, (itemId, zoneEl) => handleDrop(itemId, zoneEl));

            container.appendChild(zone);
        });
    }

    // ---- Render Pool Cards ----
    function renderPoolCards(puzzle) {
        const pool = document.getElementById('pool-cards');
        pool.innerHTML = '';

        // Shuffle items for display
        const shuffled = [...puzzle.items].sort(() => Math.random() - 0.5);

        shuffled.forEach(item => {
            const card = createCard(item);
            pool.appendChild(card);
        });
    }

    function createCard(item) {
        const card = document.createElement('div');
        card.className = 'drag-card';
        card.dataset.itemId = item.id;
        const techBadge = item.tech ? `<span class="card-tech">${item.tech}</span>` : '';
        card.innerHTML = `<span class="card-icon">${item.icon}</span><span class="card-text"><span class="card-label">${item.label}</span>${techBadge}</span>`;
        DragDrop.makeDraggable(card);
        return card;
    }

    // ---- Handle Drop ----
    function handleDrop(itemId, zoneEl) {
        if (!currentPuzzle) return;

        const item = currentPuzzle.items.find(i => i.id === itemId);
        if (!item) return;

        // If zone already has a card, send it back to pool
        const existingCard = zoneEl.querySelector('.drag-card');
        if (existingCard) {
            sendCardToPool(existingCard.dataset.itemId);
        }

        // If this card was in another zone, clear it
        const allZones = document.querySelectorAll('.drop-zone');
        allZones.forEach(z => {
            const c = z.querySelector('.drag-card');
            if (c && c.dataset.itemId === itemId) {
                z.classList.remove('filled');
                z.innerHTML = `
                    <span class="zone-number">Step ${parseInt(z.dataset.slotIndex) + 1}</span>
                    <span class="zone-placeholder">Drop here</span>
                `;
            }
        });

        // Remove card from pool if it's there
        const poolCard = document.querySelector(`#pool-cards .drag-card[data-item-id="${itemId}"]`);
        if (poolCard) poolCard.remove();

        // Place card in zone
        zoneEl.innerHTML = '';
        zoneEl.innerHTML = `<span class="zone-number">Step ${parseInt(zoneEl.dataset.slotIndex) + 1}</span>`;
        const newCard = createCard(item);
        newCard.classList.add('in-slot');
        zoneEl.appendChild(newCard);
        zoneEl.classList.add('filled');

        // Clear any previous correct/incorrect styling
        zoneEl.classList.remove('correct', 'incorrect');
    }

    function sendCardToPool(itemId) {
        const pool = document.getElementById('pool-cards');
        const item = currentPuzzle.items.find(i => i.id === itemId);
        if (!item) return;

        // Check if already in pool
        if (pool.querySelector(`.drag-card[data-item-id="${itemId}"]`)) return;

        const card = createCard(item);
        pool.appendChild(card);
    }

    // ---- Check Answer ----
    function checkAnswer() {
        if (!currentPuzzle) return;

        const zones = document.querySelectorAll('#drop-zones .drop-zone');
        let correctCount = 0;
        let allFilled = true;

        zones.forEach((zone, i) => {
            const card = zone.querySelector('.drag-card');
            zone.classList.remove('correct', 'incorrect');

            if (!card) {
                allFilled = false;
                return;
            }

            const isCorrect = card.dataset.itemId === currentPuzzle.correctOrder[i];
            if (isCorrect) {
                correctCount++;
                zone.classList.add('correct');
            } else {
                zone.classList.add('incorrect');
            }
        });

        if (!allFilled) {
            // Shake empty zones
            zones.forEach(zone => {
                if (!zone.querySelector('.drag-card')) {
                    zone.classList.add('incorrect');
                    setTimeout(() => zone.classList.remove('incorrect'), 600);
                }
            });
            return;
        }

        attempts++;

        if (correctCount === currentPuzzle.correctOrder.length) {
            // WIN!
            stopTimer();
            setTimeout(() => showResults(correctCount), 800);
        }
    }

    // ---- Show Results ----
    function showResults(correctCount) {
        const total = currentPuzzle.correctOrder.length;
        const accuracy = Math.round((correctCount / total) * 100);

        // Calculate score
        const timeBonus = Math.max(0, 300 - elapsedSeconds * 2);
        const accuracyScore = accuracy * 10;
        const hintPenalty = hintUsed ? 100 : 0;
        const attemptPenalty = Math.max(0, (attempts - 1) * 50);
        const score = Math.max(0, accuracyScore + timeBonus - hintPenalty - attemptPenalty);

        // Calculate stars
        let stars = 1;
        if (score >= 800) stars = 3;
        else if (score >= 500) stars = 2;

        // Update state
        const prev = gameState[currentPuzzle.id] || {};
        gameState[currentPuzzle.id] = {
            completed: true,
            stars: Math.max(prev.stars || 0, stars),
            score: Math.max(prev.score || 0, score),
            bestTime: prev.bestTime ? Math.min(prev.bestTime, elapsedSeconds) : elapsedSeconds
        };
        saveState();

        // Render results
        document.getElementById('results-stars').innerHTML = [1, 2, 3].map(s =>
            `<span style="opacity: ${stars >= s ? 1 : 0.2}; font-size: 3rem;">⭐</span>`
        ).join('');

        const titles = ['Nice try!', 'Well Done!', 'Perfect! 🎉'];
        document.getElementById('results-title').textContent = titles[stars - 1];

        const subtitles = [
            'You completed the puzzle. Try again for a better score!',
            'Great work! Can you get 3 stars?',
            'Flawless execution! You\'re a DevOps master!'
        ];
        document.getElementById('results-subtitle').textContent = subtitles[stars - 1];

        document.getElementById('result-time').textContent = formatTime(elapsedSeconds);
        document.getElementById('result-accuracy').textContent = accuracy + '%';
        document.getElementById('result-score').textContent = score;

        // Next puzzle button
        const nextBtn = document.getElementById('btn-next-puzzle');
        if (currentPuzzleIndex < PUZZLES.length - 1) {
            nextBtn.style.display = 'inline-flex';
        } else {
            nextBtn.style.display = 'none';
        }

        // Render explanation
        renderExplanation();

        showScreen('screen-results');
    }

    function renderExplanation() {
        const container = document.getElementById('explanation-steps');
        if (!container || !currentPuzzle) return;
        container.innerHTML = '';

        const explanations = currentPuzzle.explanation || [];

        currentPuzzle.correctOrder.forEach((itemId, i) => {
            const item = currentPuzzle.items.find(it => it.id === itemId);
            if (!item) return;

            const desc = explanations[i] || '';

            const step = document.createElement('div');
            step.className = 'explanation-step';
            step.innerHTML = `
                <div class="step-indicator">
                    <div class="step-dot">${item.icon}</div>
                    <div class="step-line"></div>
                </div>
                <div class="step-content">
                    <div class="step-title">${item.label}</div>
                    <div class="step-tech">${item.tech || ''}</div>
                    <div class="step-desc">${desc}</div>
                </div>
            `;
            container.appendChild(step);
        });
    }

    // ---- Timer ----
    function startTimer() {
        stopTimer();
        elapsedSeconds = 0;
        updateTimerDisplay();
        timerInterval = setInterval(() => {
            elapsedSeconds++;
            updateTimerDisplay();
        }, 1000);
    }

    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }

    function updateTimerDisplay() {
        const el = document.getElementById('timer-display');
        if (el) el.textContent = formatTime(elapsedSeconds);
    }

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    // ---- Hints ----
    function useHint() {
        if (hintUsed) return;
        hintUsed = true;
        document.getElementById('btn-hint').classList.add('used');
        document.getElementById('hint-overlay').classList.add('visible');
    }

    function closeHint() {
        document.getElementById('hint-overlay').classList.remove('visible');
    }

    // ---- Briefing ----
    function closeBriefing() {
        document.getElementById('briefing-card').classList.add('hidden');
    }

    // ---- Reset ----
    function resetPuzzle() {
        if (!currentPuzzle) return;
        renderDropZones(currentPuzzle);
        renderPoolCards(currentPuzzle);
    }

    // ---- Navigation ----
    function nextPuzzle() {
        if (currentPuzzleIndex < PUZZLES.length - 1) {
            startPuzzle(PUZZLES[currentPuzzleIndex + 1].id);
        }
    }

    function confirmExit() {
        document.getElementById('modal-exit').classList.add('visible');
    }

    function closeModal() {
        document.getElementById('modal-exit').classList.remove('visible');
    }

    function exitPuzzle() {
        stopTimer();
        closeModal();
        showScreen('screen-select');
    }

    // ---- Init on load ----
    document.addEventListener('DOMContentLoaded', init);

    // Public API
    return {
        showScreen,
        filterPuzzles,
        startPuzzle,
        checkAnswer,
        useHint,
        closeHint,
        closeBriefing,
        resetPuzzle,
        nextPuzzle,
        confirmExit,
        closeModal,
        exitPuzzle
    };
})();
