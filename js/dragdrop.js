/* ==========================================================
   dragdrop.js — Drag & Drop Engine
   HTML5 Drag and Drop API with touch fallback
   ========================================================== */

const DragDrop = (() => {
    let draggedCard = null;
    let draggedCardId = null;
    let touchClone = null;
    let touchOffsetX = 0;
    let touchOffsetY = 0;

    function init() {
        // Nothing to init globally; bindings happen per puzzle
    }

    /**
     * Make a card element draggable
     */
    function makeDraggable(cardEl) {
        cardEl.setAttribute('draggable', 'true');

        // ---- Desktop Drag Events ----
        cardEl.addEventListener('dragstart', (e) => {
            draggedCard = cardEl;
            draggedCardId = cardEl.dataset.itemId;
            cardEl.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', draggedCardId);

            // Slight delay to let the browser snapshot the element
            setTimeout(() => {
                cardEl.style.opacity = '0.4';
            }, 0);
        });

        cardEl.addEventListener('dragend', (e) => {
            cardEl.classList.remove('dragging');
            cardEl.style.opacity = '';
            draggedCard = null;
            draggedCardId = null;
            clearAllDragOver();
        });

        // ---- Touch Events (Mobile) ----
        cardEl.addEventListener('touchstart', handleTouchStart, { passive: false });
        cardEl.addEventListener('touchmove', handleTouchMove, { passive: false });
        cardEl.addEventListener('touchend', handleTouchEnd, { passive: false });
    }

    /**
     * Make a drop zone accept drops
     */
    function makeDropZone(zoneEl, onDrop) {
        zoneEl.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            zoneEl.classList.add('drag-over');
        });

        zoneEl.addEventListener('dragleave', (e) => {
            zoneEl.classList.remove('drag-over');
        });

        zoneEl.addEventListener('drop', (e) => {
            e.preventDefault();
            zoneEl.classList.remove('drag-over');
            const itemId = e.dataTransfer.getData('text/plain');
            if (itemId && onDrop) {
                onDrop(itemId, zoneEl);
            }
        });
    }

    // ---- Touch Handling ----
    function handleTouchStart(e) {
        if (e.touches.length !== 1) return;
        e.preventDefault();

        const touch = e.touches[0];
        const card = e.currentTarget;

        draggedCard = card;
        draggedCardId = card.dataset.itemId;

        const rect = card.getBoundingClientRect();
        touchOffsetX = touch.clientX - rect.left;
        touchOffsetY = touch.clientY - rect.top;

        // Create a floating clone
        touchClone = card.cloneNode(true);
        touchClone.classList.add('touch-clone');
        touchClone.style.cssText = `
            position: fixed;
            z-index: 9999;
            pointer-events: none;
            width: ${rect.width}px;
            opacity: 0.9;
            left: ${touch.clientX - touchOffsetX}px;
            top: ${touch.clientY - touchOffsetY}px;
            transition: none;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
            transform: scale(1.05);
        `;
        document.body.appendChild(touchClone);

        card.classList.add('dragging');
        card.style.opacity = '0.3';
    }

    function handleTouchMove(e) {
        if (!touchClone) return;
        e.preventDefault();

        const touch = e.touches[0];
        touchClone.style.left = (touch.clientX - touchOffsetX) + 'px';
        touchClone.style.top = (touch.clientY - touchOffsetY) + 'px';

        // Find drop zone under finger
        clearAllDragOver();
        const elemBelow = document.elementFromPoint(touch.clientX, touch.clientY);
        if (elemBelow) {
            const zone = elemBelow.closest('.drop-zone');
            if (zone) {
                zone.classList.add('drag-over');
            }
        }
    }

    function handleTouchEnd(e) {
        if (!touchClone) return;
        e.preventDefault();

        const touch = e.changedTouches[0];
        const elemBelow = document.elementFromPoint(touch.clientX, touch.clientY);

        if (elemBelow) {
            const zone = elemBelow.closest('.drop-zone');
            if (zone && draggedCardId) {
                // Trigger the drop callback
                const event = new CustomEvent('touchdrop', { detail: { itemId: draggedCardId } });
                zone.dispatchEvent(event);
            }
        }

        // Cleanup
        if (touchClone.parentNode) {
            touchClone.parentNode.removeChild(touchClone);
        }
        touchClone = null;

        if (draggedCard) {
            draggedCard.classList.remove('dragging');
            draggedCard.style.opacity = '';
        }
        draggedCard = null;
        draggedCardId = null;
        clearAllDragOver();
    }

    function clearAllDragOver() {
        document.querySelectorAll('.drop-zone.drag-over').forEach(z => z.classList.remove('drag-over'));
    }

    /**
     * Register touch drop handler on a zone
     */
    function makeTouchDropZone(zoneEl, onDrop) {
        zoneEl.addEventListener('touchdrop', (e) => {
            const itemId = e.detail.itemId;
            if (itemId && onDrop) {
                onDrop(itemId, zoneEl);
            }
        });
    }

    return { init, makeDraggable, makeDropZone, makeTouchDropZone };
})();
