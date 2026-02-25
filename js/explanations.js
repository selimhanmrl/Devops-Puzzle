/* ==========================================================
   explanations.js — Step-by-step explanations for each puzzle
   Loaded after puzzles.js, merges explanations into PUZZLES
   ========================================================== */

const EXPLANATIONS = {
    1: [ // CI/CD Pipeline
        "Developers push code to a GitHub repository. This triggers the CI/CD pipeline automatically via webhooks.",
        "Apache Maven compiles the Java source code, resolves dependencies from pom.xml, and produces a build artifact (.jar/.war).",
        "JUnit 5 runs unit and integration tests to catch bugs early. If tests fail, the pipeline stops here.",
        "SonarQube performs static code analysis — checking for code smells, security vulnerabilities, and technical debt.",
        "Docker packages the compiled JAR into a lightweight container image using a Dockerfile, making it portable across environments.",
        "Jenkins orchestrates the final deployment — pushing the Docker image to a registry and deploying it to the target servers."
    ],
    2: [ // GitOps Workflow
        "A developer creates a Pull Request on Gitea to change Kubernetes manifests (YAML files defining infrastructure).",
        "GitHub Actions runs automated checks — linting YAML, validating manifests, and running policy checks (e.g., OPA).",
        "After approval and passing CI, the PR is merged to the main branch. This is the single source of truth.",
        "ArgoCD watches the Git repo and detects the new commit. It compares desired state (in Git) vs actual state (in cluster).",
        "ArgoCD applies the changed manifests to the Kubernetes cluster, creating/updating pods, services, and other resources.",
        "Prometheus scrapes health metrics from the new pods and checks if they pass readiness checks and SLOs."
    ],
    3: [ // Docker Multi-Stage Build
        "The first stage uses maven:3.9 as the builder image — it has JDK, Maven, and all build tools (~800MB).",
        "COPY pom.xml first and run mvn install to download dependencies. This layer is cached — rebuilds are fast if deps don't change.",
        "Maven packages the app into a JAR file. We skip tests here because they already ran in CI.",
        "The second stage starts fresh from eclipse-temurin:21-jre — a minimal JRE image (~200MB) without build tools.",
        "COPY --from=builder copies ONLY the compiled JAR from the first stage. The build tools are discarded.",
        "ENTRYPOINT defines how to start the app. Final image is ~250MB instead of 2GB."
    ],
    4: [ // K8s Pod Lifecycle
        "kube-scheduler finds a node with enough CPU/memory and assigns the pod. This considers taints, tolerations, and affinity rules.",
        "Init containers run before the main app. Flyway runs database migrations so the schema is ready when the app starts.",
        "containerd (the container runtime) pulls the image and starts the main application container.",
        "The readiness probe hits Spring Actuator's /health endpoint. The pod only receives traffic once it returns 200 OK.",
        "Nginx Ingress Controller routes external traffic to the pod now that it's marked as Ready.",
        "On shutdown, Kubernetes sends SIGTERM. The preStop hook allows the app to drain connections gracefully before terminating."
    ],
    5: [ // Terraform IaC
        "Engineers write infrastructure as code using HashiCorp Configuration Language (.tf files) — defining AWS resources declaratively.",
        "terraform init downloads provider plugins (AWS, Azure) and configures the S3 backend for remote state storage.",
        "terraform plan compares desired state to current state and shows what will be created, modified, or destroyed.",
        "The plan output is attached to an Azure DevOps PR for team review. No changes happen without human approval.",
        "terraform apply executes the approved plan, calling AWS APIs to create/modify resources.",
        "The state file (tracking all managed resources) is saved to S3 with versioning and locking via DynamoDB."
    ],
    6: [ // Ansible
        "The inventory file (hosts.ini) lists target servers, grouped by role — web servers, databases, load balancers, etc.",
        "YAML playbooks define the desired state: packages to install, files to template, services to enable.",
        "ansible-lint checks for best practices, deprecated modules, and syntax errors before any server is touched.",
        "Molecule creates disposable VMs (via Vagrant) to test the playbook in isolation, verifying idempotency.",
        "The --check flag runs the playbook in dry-run mode, showing what WOULD change without actually changing anything.",
        "Finally, ansible-playbook applies the changes to all servers in parallel over SSH. Ansible is agentless — no software needed on targets."
    ],
    7: [ // GitHub Actions CI
        "A webhook fires when code is pushed or a PR is opened. The workflow YAML file defines which events trigger it.",
        "actions/checkout@v4 clones the repository into the runner's workspace so subsequent steps can access the code.",
        "actions/setup-node@v4 installs Node.js 20 LTS and configures npm. This ensures a consistent runtime version.",
        "npm ci installs exact dependency versions from package-lock.json. Unlike npm install, it's faster and deterministic.",
        "ESLint checks for code quality issues; Prettier ensures consistent formatting. Both fail the build if violations are found.",
        "Jest runs the full test suite — unit tests, snapshots, and coverage reports. Tests must pass before merge is allowed."
    ],
    8: [ // Helm Chart
        "helm create scaffolds a chart directory with templates/, values.yaml, Chart.yaml, and common K8s manifests.",
        "values.yaml is the main configuration file — image tags, replica counts, resource limits, and environment-specific settings.",
        "helm lint validates chart structure, checks for missing required fields, and warns about template errors.",
        "helm package bundles the chart directory into a versioned .tgz archive ready for distribution.",
        "ChartMuseum is a Helm chart repository server. The packaged chart is pushed here so teams can install it via helm repo add.",
        "helm upgrade --install deploys the chart to Kubernetes. If a release exists, it's upgraded; otherwise, it's installed fresh."
    ],
    9: [ // Git Feature Branch Workflow
        "git checkout -b creates a new branch from your current position and switches to it. This isolates your feature work from main.",
        "You write your code, create new files, and make changes. The working directory now has uncommitted modifications.",
        "git add -A stages ALL changes (new files, modifications, deletions) for the next commit. Think of it as preparing a package.",
        "git commit creates a snapshot of your staged changes with a descriptive message. The commit is stored locally in your .git history.",
        "git push uploads your local commits to the remote repository (e.g., GitHub). Your branch now exists on the server for others to see.",
        "Opening a Pull Request on GitHub lets teammates review your code. After approval, the PR is merged into main and the feature branch is deleted."
    ],
    10: [ // Git Rebase vs Merge
        "git checkout switches to your feature branch. You need to be on the branch you want to rebase ONTO another branch.",
        "git fetch downloads new commits from the remote without modifying your working directory. Now you know what's changed on origin/main.",
        "git rebase origin/main replays your commits on top of the latest main. Unlike merge, this creates a linear history — no merge commits.",
        "If your changes and main's changes touch the same lines, Git pauses and shows conflict markers (<<<<<<< / >>>>>>>). You edit the file to resolve.",
        "After resolving each conflict, git add the file and run git rebase --continue. Git replays the next commit. Repeat until done.",
        "Since rebase rewrites commit hashes, you must force push. --force-with-lease is safer than --force — it fails if someone else pushed first."
    ],
    11: [ // Git Conflict Resolution
        "git pull origin main fetches and merges the latest remote changes. If both you and a teammate edited the same lines, Git can't auto-merge.",
        "Git prints 'CONFLICT (content): Merge conflict in file.js' and sets the file status to 'both modified'. The merge is paused.",
        "The conflict markers show both versions: <<<<<<< HEAD (your changes), ======= (separator), >>>>>>> origin/main (their changes). You choose what to keep.",
        "After editing, git add marks the file as resolved. This tells Git: 'I've fixed the conflict, this is the correct version.'",
        "git commit (without -m for merge commits) creates a merge commit that joins both histories. Git auto-generates a commit message.",
        "git push uploads the merge commit. Your teammates will see both sets of changes properly combined."
    ],
    12: [ // Git Stash Workflow
        "git stash saves your uncommitted changes (staged and unstaged) into a temporary storage area and reverts your working directory to clean.",
        "With a clean working directory, you can safely switch to the hotfix branch without carrying over unfinished feature code.",
        "You fix the bug, stage, and commit on the hotfix branch. This is a focused fix without any WIP code from your feature.",
        "git checkout switches back to your feature branch. The working directory is still clean (your changes are in the stash).",
        "git stash pop restores your stashed changes AND removes them from the stash. Use 'git stash apply' instead if you want to keep the stash.",
        "Your working directory is back to exactly where you left off. The bug is fixed on its branch, and you've lost zero work."
    ],
    13: [ // Git Cherry-Pick Hotfix
        "git log develop shows the commit history. You find the specific commit (abc1234) that contains the critical fix you need.",
        "git checkout release/v2.1 switches to the production release branch. This is the branch that needs the fix.",
        "git cherry-pick abc1234 copies that single commit and applies it to your current branch. It creates a new commit with the same changes.",
        "If the cherry-picked code conflicts with the release branch, you'll need to resolve conflicts manually, just like a merge conflict.",
        "After cherry-picking, run the test suite to verify the fix works correctly on the release branch without breaking anything.",
        "git push sends the cherry-picked fix to the remote release branch. The fix is now in production without merging all of develop."
    ],
    14: [ // Gitflow Release Cycle
        "A release branch is created from develop (not main). This freezes new features — only bug fixes and version bumps go on this branch.",
        "Version numbers are bumped (package.json, build configs). Release-specific bug fixes are committed directly to the release branch.",
        "QA tests the release branch thoroughly. Any bugs found are fixed here, not on develop. This keeps develop open for new feature work.",
        "Once QA passes, the release branch is merged to main. Main always reflects production-ready code in Gitflow.",
        "git tag creates an annotated tag (v3.0.0) on main. Tags are immutable pointers to specific commits — used by CI/CD for deployments.",
        "The release branch is merged BACK to develop so bug fixes made during the release aren't lost. Then the release branch is deleted."
    ],
    15: [ // Git Bisect Bug Hunt
        "git bisect start enters bisect mode. Git will guide you through a binary search of commits to find when a bug was introduced.",
        "You mark the current commit (HEAD) as 'bad' — meaning the bug exists at this point in history.",
        "You mark a known-good commit (e.g., the v2.0.0 tag) where the bug didn't exist. Git now has upper and lower bounds.",
        "Git checks out a commit halfway between good and bad. You test it and tell Git if it's good or bad. This repeats ~6 times for 50 commits (log₂).",
        "After enough iterations, Git identifies the exact commit that introduced the bug: 'abc1234 is the first bad commit.' Now you know what broke.",
        "git bisect reset returns you to the original branch. You can now inspect the bad commit, understand the change, and write a targeted fix."
    ],
    16: [ // Git Submodule Setup
        "git submodule add clones the external repo into libs/ui and registers it. The submodule is tracked as a specific commit hash, not a branch.",
        ".gitmodules is auto-created, listing the submodule's remote URL and local path. This file IS committed so teammates know about the submodule.",
        "You commit .gitmodules and the submodule reference. The parent repo stores a pointer to the exact commit hash of the submodule.",
        "When a teammate clones, the submodule folder is empty. Running git submodule init registers the submodule URLs from .gitmodules.",
        "git submodule update --remote fetches the latest commits from the submodule's remote and updates the working copy.",
        "After updating, you commit the new submodule reference in the parent repo. This locks the submodule to the new commit hash."
    ],
    17: [ // API Gateway
        "Kong rate-limits requests per IP or API key (e.g., 100 requests/minute). Excess requests get 429 Too Many Requests.",
        "Keycloak validates the JWT bearer token — checking signature, expiration, issuer, and required scopes/roles.",
        "Joi validates the request body against a JSON schema — ensuring required fields exist and data types are correct.",
        "Express.js middleware handles business logic: logging, request transformation, and custom validation rules.",
        "Kong routes the validated request to the correct backend microservice based on the URL path and HTTP method.",
        "Redis caches successful responses with a TTL. Subsequent identical requests are served from cache, reducing backend load by 90%."
    ],
    18: [ // Message Queue
        "Spring AMQP producer serializes the order object and publishes it to RabbitMQ. The producer doesn't wait for processing.",
        "The exchange receives the message and routes it to queues based on routing keys and binding rules (direct, topic, or fanout).",
        "The order queue stores messages durably on disk. Even if RabbitMQ restarts, messages aren't lost (persistent delivery mode).",
        "@RabbitListener consumer picks up messages and processes them — validating orders, charging payments, notifying restaurants.",
        "If processing fails, the message moves to a retry queue with a TTL delay (e.g., retry after 30 seconds) via Dead Letter Exchange.",
        "After max retries (e.g., 3 attempts), messages land in the DLQ for manual inspection. No message is ever silently lost."
    ],
    19: [ // ELK Stack
        "Spring Boot logs via Logback (Java) or Winston (Node.js) in structured JSON format with timestamps, levels, and trace IDs.",
        "Filebeat agents run on each server, tailing log files and shipping them to Logstash. It handles backpressure and retries.",
        "Logstash parses, filters, and enriches logs — extracting fields with grok patterns, adding geo-IP data, and normalizing timestamps.",
        "Elasticsearch indexes logs into time-based indices. Its inverted index enables full-text search across millions of log entries.",
        "Grafana connects to Elasticsearch as a datasource and displays dashboards — request rates, error counts, latency percentiles.",
        "PagerDuty integrates with Grafana alerts. When error rate > threshold, it pages the on-call engineer via SMS/phone/Slack."
    ],
    20: [ // Kafka
        "The ride-sharing app publishes ride events (request, accept, start, complete) using Spring Kafka's KafkaTemplate.",
        "Events are distributed across topic partitions by ride_id. Each partition is an ordered, append-only log stored on Kafka brokers.",
        "Consumer groups allow parallel processing. Each consumer reads from unique partitions, enabling horizontal scaling.",
        "Kafka Streams processes events in real-time — calculating surge pricing, matching drivers, and detecting fraud patterns.",
        "Kafka Connect Sink writes processed events to ClickHouse (columnar OLAP database) optimized for analytical queries.",
        "Apache Superset connects to ClickHouse and provides interactive dashboards — ride heatmaps, revenue metrics, driver analytics."
    ],
    21: [ // OAuth 2.0
        "The React frontend renders a 'Login with Google' button. Clicking it redirects the user to Google's authorization endpoint.",
        "Google's OAuth 2.0 server shows the consent screen with the scopes your app requests (email, profile, etc.).",
        "The user reviews and grants permission. Google redirects back to your app with an authorization code in the URL.",
        "Passport.js receives the auth code at the callback URL (/auth/google/callback). This code is single-use and expires quickly.",
        "The backend exchanges the auth code for an access token by calling Google's token endpoint with your client secret.",
        "Express creates a session (stored in Redis) and issues a JWT. The frontend stores this JWT for authenticating future API calls."
    ],
    22: [ // GraphQL
        "React components use Apollo Client's useQuery/useMutation hooks to declare exactly what data they need — no over-fetching.",
        "The GraphQL query is validated against the schema (SDL). Type checking catches errors before any resolver executes.",
        "Apollo Server matches query fields to resolver functions. Each resolver fetches data from its specific data source.",
        "DataLoader batches and deduplicates database calls. Instead of N+1 queries, it batches into a single query per tick.",
        "Prisma ORM translates the batched request into optimized SQL with proper JOINs and WHERE clauses.",
        "PostgreSQL executes the query and returns results. Prisma maps rows to typed JavaScript objects for the resolvers."
    ],
    23: [ // Redis Caching
        "The API endpoint receives a request (e.g., GET /products/123). Before hitting the database, it checks the cache.",
        "Redis GET checks if the product data exists in memory. Redis operates at 100,000+ ops/second — sub-millisecond latency.",
        "Cache miss means the data isn't in Redis (first request or TTL expired). We must query the primary database.",
        "MongoDB query fetches the full product document. This is slower (5-50ms) but returns the authoritative data.",
        "Redis SET stores the result with EX 300 (5-minute TTL). Subsequent requests within 5 minutes skip the database entirely.",
        "The JSON response is returned to the client. Next request for the same product will hit Redis cache — 100x faster."
    ],
    24: [ // Nginx Reverse Proxy
        "apt install nginx installs Nginx and its dependencies. It starts automatically and listens on port 80.",
        "A new config file in /etc/nginx/sites-available/ defines server blocks with server_name and listen directives.",
        "Upstream blocks define backend server groups: upstream api { server 127.0.0.1:3000; server 127.0.0.1:3001; }",
        "location blocks route paths to upstreams: /api → Node.js, /admin → Django, / → React static files via proxy_pass.",
        "Certbot automatically obtains a free Let's Encrypt TLS certificate and modifies the Nginx config to enable HTTPS.",
        "systemctl reload nginx applies the new configuration without dropping existing connections (graceful reload)."
    ],
    25: [ // Git Hooks CI Pipeline
        "The pre-commit hook fires before git commit finalizes. lint-staged runs ESLint/Prettier ONLY on staged files — fast and focused.",
        "ESLint catches code quality issues (unused variables, missing returns); Prettier auto-formats code. Both can --fix files automatically.",
        "The commit-msg hook validates your commit message format. commitlint checks it follows Conventional Commits (feat:, fix:, chore:, etc.).",
        "The pre-push hook runs before git push sends commits to the remote. npm test runs the full Jest test suite to catch regressions.",
        "If ALL hooks pass (lint, format, commit message, tests), Git proceeds normally with the commit and push.",
        "The push reaches GitHub/GitLab. Since hooks already validated everything locally, CI runs are much more likely to pass — saving time and resources."
    ],
    26: [ // Git Reset & Recovery
        "git reflog shows every HEAD movement — commits, merges, rebases, resets. Even 'deleted' commits exist here for 30-90 days.",
        "You scan the reflog entries to find the commit hash just BEFORE the accidental reset --hard. Each entry shows the action that caused it.",
        "git checkout -b recovery <hash> creates a new branch pointing to the recovered commit. Your code is back — nothing was actually deleted.",
        "You verify that the recovered branch contains all the expected changes by checking diffs and running tests.",
        "git checkout main switches back to the main branch where you need to restore the work.",
        "git merge recovery brings the recovered commits back into main. Crisis averted — the reflog saved your work."
    ],
    27: [ // Conventional Commits Flow
        "You implement a feature, fix a bug, or refactor code. The actual development work happens first.",
        "git add stages specific files. You can use 'git add -p' for partial staging to keep commits focused on one logical change.",
        "The commit message follows the format: type(scope): description. Types: feat (new feature), fix (bug fix), docs, refactor, test, chore.",
        "commitlint (usually via Husky hook) validates the message format. Invalid messages like 'fixed stuff' are rejected automatically.",
        "semantic-release reads commit history since the last release. feat: = minor version bump, fix: = patch, BREAKING CHANGE: = major.",
        "CHANGELOG.md is auto-generated from commit messages, grouped by type. Releases are tagged and published automatically — zero manual work."
    ],
    28: [ // Git Tag & Release
        "git tag -a creates an annotated tag with a message, author, and date (vs. lightweight tags which are just pointers). Use -a for releases.",
        "Tags are NOT pushed by default with git push. You must explicitly push with git push origin v2.0.0 or git push --tags for all tags.",
        "GitHub's Releases page is found under your repo's 'Releases' link. It provides a UI for creating releases from existing tags.",
        "'Create Release from tag' lets you select your pushed tag. GitHub auto-generates the diff link between this tag and the previous one.",
        "Release notes document what changed — new features, bug fixes, breaking changes. GitHub can auto-generate these from merged PRs.",
        "Binary assets (.zip, .exe, .dmg) are uploaded as release attachments. Users can download them directly from the release page."
    ],
    29: [ // Monorepo Sparse Checkout
        "git clone --filter=blob:none does a 'blobless clone' — it downloads all commits and trees but NOT file contents. This is fast for huge repos.",
        "git sparse-checkout init --cone enables sparse-checkout in 'cone mode' — optimized for directory-based patterns (much faster than glob patterns).",
        "git sparse-checkout set services/payments tells Git to only populate files under that path. Everything else becomes 'virtual' — tracked but not checked out.",
        "Your working directory only contains the payments service files. The full Git history is available, but disk usage is minimal.",
        "You work, commit, and diff exactly like normal. Git handles the sparse worktree transparently — you don't notice it day-to-day.",
        "git push only uploads your commits. Other teams' files are untouched. The sparse checkout doesn't affect the remote repo at all."
    ],
    30: [ // Interactive Rebase Cleanup
        "git rebase -i HEAD~8 opens an editor listing the last 8 commits with 'pick' next to each. This is your editing canvas.",
        "Change 'pick' to 'squash' (combine into previous commit) or 'fixup' (same as squash but discard the commit message). Great for 'WIP' commits.",
        "Change 'pick' to 'reword' to edit the commit message without changing the code. Use this to write meaningful, descriptive messages.",
        "When you save and close the editor, Git starts replaying commits with your instructions. For squash, it opens another editor for the combined message.",
        "If squashing or reordering causes conflicts, Git pauses for you to resolve them. Run git rebase --continue after fixing.",
        "Since interactive rebase rewrites history (new commit hashes), you force push with --force-with-lease. This is safe — it prevents overwriting teammates' work."
    ],
    31: [ // Azure DevOps Pipeline
        "azure-pipelines.yml defines the pipeline trigger — typically on push to main or PR creation. Azure DevOps reads this YAML file automatically.",
        "dotnet restore downloads NuGet packages, and dotnet build compiles the C# source code. Both run on a Microsoft-hosted build agent.",
        "dotnet test runs xUnit/NUnit test projects. If any test fails, the pipeline stops and reports the failure on the PR.",
        "dotnet publish compiles the app for deployment, producing a self-contained or framework-dependent output in the ./output folder.",
        "Azure Artifacts stores the build output as a versioned package. Teams can reference specific versions for rollbacks or auditing.",
        "The AzureWebApp@1 task deploys the package to Azure App Service using deployment slots for zero-downtime swaps."
    ],
    32: [ // ArgoCD GitOps + K8s
        "CI pipeline (e.g., GitHub Actions) builds a Docker image from the source code on every push. The image is tagged with the commit SHA or version.",
        "The Docker image is pushed to a container registry (Docker Hub, AWS ECR, or Azure ACR). The image is now available for Kubernetes to pull.",
        "A separate commit updates the K8s manifest (Kustomize overlay or Helm values.yaml) with the new image tag. This is the GitOps trigger.",
        "ArgoCD's Application Controller continuously watches the Git repo. It compares the desired state (Git) with the live state (cluster) every 3 minutes.",
        "ArgoCD applies the manifest changes to the K8s cluster — creating new pods with the updated image. It uses kubectl under the hood.",
        "ArgoCD runs built-in and custom health checks. If pods fail readiness probes, ArgoCD marks the app as 'Degraded' and can auto-rollback."
    ],
    33: [ // GitLab CI/CD + Docker + K8s
        "The build stage compiles the Go binary using 'go build'. GitLab runners execute each stage in isolated Docker containers.",
        "'go test ./...' runs all tests recursively. GitLab shows test results and coverage reports directly in the merge request UI.",
        "Docker-in-Docker (dind) service builds the container image. It's pushed to GitLab's built-in Container Registry — no external registry needed.",
        "Trivy scans the Docker image for known CVEs (Common Vulnerabilities and Exposures). Critical/high findings can block the pipeline.",
        "'helm upgrade --install' deploys to the staging K8s cluster using Helm 3. Helm manages templates, rollbacks, and release history.",
        "GitLab's manual job gate requires a human to click 'Play' before deploying to production. This provides a final safety check."
    ],
    34: [ // Jenkins Blue-Green Deploy
        "Jenkinsfile defines the pipeline in Groovy DSL. It builds the app, runs tests, and creates a Docker image — all in declarative stages.",
        "The 'green' deployment is created in K8s alongside the existing 'blue' deployment. Both versions run simultaneously but only blue receives traffic.",
        "Newman (Postman CLI) runs smoke tests against the green deployment's internal service URL. Tests verify critical API endpoints work correctly.",
        "The Nginx Ingress rules are updated to route 100% of traffic from blue to green. This is the actual switchover moment — instant, no downtime.",
        "Prometheus monitors green's error rate, latency, and CPU/memory for 5-10 minutes. If metrics are bad, the team can instantly switch back to blue.",
        "After green proves stable, the old blue deployment is deleted. Resources are freed. The green deployment IS the new production."
    ],
    35: [ // K8s Rolling Update Strategy
        "kubectl set image (or updating the YAML) changes the container image tag in the Deployment spec. This triggers the rolling update.",
        "Kubernetes creates a new ReplicaSet with the updated pod spec. The old ReplicaSet still runs all existing pods.",
        "With maxSurge: 1, K8s starts ONE new pod above the desired count. It won't create more until this pod is ready.",
        "The readiness probe (HTTP GET /healthz returning 200) must pass before the new pod receives traffic. This prevents routing to unhealthy pods.",
        "With maxUnavailable: 0, K8s only terminates an old pod AFTER a new pod is ready. This guarantees zero downtime during the update.",
        "kubectl rollout status shows progress. Once all 5 replicas are updated, the old ReplicaSet is scaled to 0 (kept for rollback history)."
    ],
    36: [ // GitHub Actions → Docker → K8s
        "The 'on: push' trigger with branch filter starts the workflow only when code is pushed to main. PRs to main can use a separate workflow.",
        "actions/checkout clones the repo, setup-node installs Node.js, and Jest runs the test suite. All in the same job for fast execution.",
        "docker/build-push-action builds a multi-platform Docker image and pushes it to GHCR (ghcr.io/org/repo:sha). Build caching speeds up subsequent runs.",
        "docker/login-action authenticates to GitHub Container Registry using the built-in GITHUB_TOKEN secret. No manual token management needed.",
        "azure/k8s-set-context (or equivalent) configures kubectl credentials from a repository secret containing the kubeconfig or service account token.",
        "kubectl apply -f k8s/deploy.yml applies the Kubernetes manifests. The deployment references the new image tag, triggering a rolling update."
    ],
    37: [ // Spring Boot → Maven → Docker → K8s
        "mvn clean package compiles Java source, runs all unit tests, and produces a JAR/WAR artifact. 'clean' ensures no stale compiled classes from previous builds.",
        "JUnit 5 runs unit tests, while Testcontainers spins up real Docker containers (PostgreSQL, Redis) for integration tests — catching bugs that mocks miss.",
        "SonarQube analyzes the code for bugs, code smells, and security vulnerabilities. The Quality Gate fails the build if it doesn't meet the team's thresholds.",
        "A multi-stage Dockerfile uses JDK 21 to build and JRE 21-alpine to run — cutting the image from ~600MB to ~150MB. Layers are cached for fast rebuilds.",
        "Harbor (or ECR/ACR) stores the tagged Docker image. CI tags images with the git SHA for traceability — you can always map a running pod to its exact commit.",
        "Helm upgrade --install applies the Kubernetes manifests with the new image tag. Helm manages rollback history, so 'helm rollback' works if something goes wrong."
    ],
    38: [ // Spring Boot CVE Hotfix Pipeline
        "A hotfix branch (hotfix/cve-2024) is created from the production release branch, not develop. This ensures only the CVE fix ships — no unfinished features.",
        "The vulnerable dependency version is overridden in pom.xml using Maven's dependency management. BOM imports ensure ALL transitive usages are pinned to the safe version.",
        "CI builds the patched app and runs OWASP Dependency-Check — a tool that matches your JARs against the NVD (National Vulnerability Database) to confirm zero known CVEs remain.",
        "The Docker image is built and scanned with Trivy. Even if Java deps are clean, the base OS image (Alpine/Debian) could have its own CVEs that need attention.",
        "The hotfixed image deploys to staging where Newman (Postman CLI) or k6 runs automated smoke tests. This confirms the patch doesn't break critical API flows — fast but thorough.",
        "kubectl rollout performs a rolling update in production — gradually replacing old pods with patched ones. Zero downtime. If errors spike, 'kubectl rollout undo' reverts instantly."
    ],
    39: [ // Node.js Express → Docker → AWS ECS
        "GitHub Actions runs 'npm ci' (clean install from lockfile) then executes the Jest test suite. CI fails fast if any test breaks — no deployments for broken code.",
        "'npm audit --audit-level=high' checks every dependency against the npm advisory database. The pipeline fails if any high/critical CVEs are found — shift-left security.",
        "A multi-stage Dockerfile copies only 'package*.json' first (for cached npm install), then copies source code. node:22-alpine keeps the image tiny (~120MB).",
        "The image is pushed to Amazon ECR with tags: 'latest' and the git SHA. ECR is private, integrated with AWS IAM — no Docker Hub rate limits or public exposure.",
        "The ECS Task Definition JSON is updated with the new ECR image URI. It defines CPU/memory limits, environment variables, health checks, and log configuration.",
        "ECS updates the service with a rolling deployment strategy: new tasks start, pass health checks, then old tasks drain. minimumHealthyPercent=100 means zero downtime."
    ],
    40: [ // Spring Boot Canary on K8s
        "CI builds the Spring Boot app, produces a Docker image tagged with the version, and pushes it to the container registry. This is the build artifact entering the CD pipeline.",
        "Istio VirtualService routes only 10% of traffic to the canary pods (new version). 90% continues hitting the stable version. Users don't notice anything different.",
        "Prometheus collects request latency (p99), HTTP 5xx error rate, and JVM metrics from both versions. Grafana dashboards show the canary vs stable side-by-side.",
        "Flagger (or Argo Rollouts) automatically compares canary metrics against the stable baseline. If the canary's error rate is >1% higher, it auto-rolls back to stable.",
        "If metrics look good, the traffic split gradually increases: 10% → 25% → 50% → 75% → 100%. Each step has a bake time (e.g., 5 minutes) for observation.",
        "Once 100% of traffic runs on the new version, the old ReplicaSet is scaled to zero. The canary IS the new stable. Failed canaries never reach most users."
    ],
    41: [ // Node.js npm Vulnerability Pipeline
        "Snyk (or npm audit) generates a detailed report listing each CVE, affected package, severity (critical/high), and a recommended fix version. This is the remediation roadmap.",
        "npm update patches dependencies to the latest compatible versions. Some CVE fixes require major version bumps that may contain breaking API changes — test carefully.",
        "The CI pipeline runs the full Jest test suite AND a fresh Snyk scan. Tests catch regressions from dependency updates; the re-scan confirms all CVEs are resolved.",
        "The patched app is Dockerized and Trivy scans the container image — checking BOTH npm packages AND the OS-level packages in the Alpine/Debian base layer.",
        "The image deploys to staging where OWASP ZAP runs a DAST (Dynamic Application Security Testing) scan — testing the running app for XSS, injection, and auth flaws.",
        "After staging passes, ArgoCD syncs the new image to the production K8s cluster. The security team gets an automated report confirming all CVEs are remediated."
    ],
    42: [ // Spring Monolith → Microservices CD
        "In a mono-repo, the CI uses path filters: only services with changed files are built. Maven's -pl flag builds specific modules — saving time on unchanged services.",
        "Each microservice runs its own integration tests using Testcontainers for databases and WireMock for mocking downstream service APIs — fully isolated testing.",
        "docker-compose build (or parallel Docker builds) creates an image per service. Each service has its own Dockerfile optimized for its runtime (JDK 21, Node 22, Go, etc.).",
        "All newly built images are pushed to the container registry (Harbor/ACR) with consistent tagging: {service-name}:{git-sha}. Only changed services get new images.",
        "ArgoCD's ApplicationSet ('app-of-apps' pattern) manages multiple ArgoCD Applications from one config. When manifests change, only affected services sync — independent deployments.",
        "Each microservice deploys to its own K8s namespace (payments-ns, orders-ns, etc.). Istio service mesh handles inter-service communication, mTLS, and traffic policies."
    ]
};

// Merge explanations into PUZZLES array
PUZZLES.forEach(puzzle => {
    if (EXPLANATIONS[puzzle.id]) {
        puzzle.explanation = EXPLANATIONS[puzzle.id];
    }
});
