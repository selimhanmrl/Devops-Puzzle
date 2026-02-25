/* ==========================================================
   puzzles.js — All 30 Puzzle Definitions
   Each puzzle uses REAL technology names so players learn
   actual tools and what they do in the pipeline.
   ========================================================== */

const PUZZLES = [
    // ==================== DevOps Puzzles ====================
    {
        id: 1,
        title: "CI/CD Pipeline",
        category: "DevOps",
        difficulty: "Easy",
        description: "Your startup just landed its first enterprise client. They demand automated deployments with zero manual steps. Your CTO says: 'Set up a CI/CD pipeline by Friday or we lose the deal.' The Java app uses Maven for builds and Jenkins for automation. Arrange the pipeline stages in the correct order.",
        items: [
            { id: "cicd-1", label: "GitHub Push", icon: "🐙", tech: "GitHub" },
            { id: "cicd-2", label: "Maven Build", icon: "🔨", tech: "Apache Maven" },
            { id: "cicd-3", label: "JUnit Tests", icon: "🧪", tech: "JUnit 5" },
            { id: "cicd-4", label: "SonarQube Scan", icon: "🔍", tech: "SonarQube" },
            { id: "cicd-5", label: "Docker Image Build", icon: "🐳", tech: "Docker" },
            { id: "cicd-6", label: "Jenkins Deploy", icon: "🚀", tech: "Jenkins" }
        ],
        correctOrder: ["cicd-1", "cicd-2", "cicd-3", "cicd-4", "cicd-5", "cicd-6"],
        hint: "Code goes to GitHub first, Maven compiles the Java app, JUnit runs tests, SonarQube checks quality, Docker packages it, and Jenkins deploys to production."
    },
    {
        id: 2,
        title: "GitOps Workflow",
        category: "DevOps",
        difficulty: "Easy",
        description: "A healthcare company needs audit trails for every infrastructure change. They've chosen GitOps so every change is tracked in Git. Their Kubernetes cluster is managed by ArgoCD with manifests stored in Gitea. Build the deployment flow.",
        items: [
            { id: "gitops-1", label: "Gitea Pull Request", icon: "🍵", tech: "Gitea" },
            { id: "gitops-2", label: "GitHub Actions Review", icon: "⚡", tech: "GitHub Actions" },
            { id: "gitops-3", label: "Merge to Main Branch", icon: "🔀", tech: "Git" },
            { id: "gitops-4", label: "ArgoCD Sync Trigger", icon: "🔄", tech: "ArgoCD" },
            { id: "gitops-5", label: "Kubernetes Apply", icon: "☸️", tech: "Kubernetes" },
            { id: "gitops-6", label: "Prometheus Health Check", icon: "📊", tech: "Prometheus" }
        ],
        correctOrder: ["gitops-1", "gitops-2", "gitops-3", "gitops-4", "gitops-5", "gitops-6"],
        hint: "GitOps flow: PR in Gitea → CI reviews → merge → ArgoCD detects the change → syncs to Kubernetes → Prometheus verifies health."
    },
    {
        id: 3,
        title: "Docker Multi-Stage Build",
        category: "DevOps",
        difficulty: "Medium",
        description: "Your team's Java Docker images are 2GB and deployments take forever. The lead engineer asks you to create a multi-stage Dockerfile using Maven to build and Eclipse Temurin as the slim runtime. Arrange the Dockerfile layers.",
        items: [
            { id: "docker-1", label: "FROM maven:3.9 (Builder)", icon: "📦", tech: "Maven Image" },
            { id: "docker-2", label: "COPY pom.xml + mvn install", icon: "📚", tech: "Maven Dependencies" },
            { id: "docker-3", label: "mvn package -DskipTests", icon: "⚙️", tech: "Maven Package" },
            { id: "docker-4", label: "FROM eclipse-temurin:21-jre", icon: "☕", tech: "Eclipse Temurin JRE" },
            { id: "docker-5", label: "COPY --from=builder app.jar", icon: "📋", tech: "Docker Multi-Stage" },
            { id: "docker-6", label: "ENTRYPOINT java -jar app.jar", icon: "▶️", tech: "Java Runtime" }
        ],
        correctOrder: ["docker-1", "docker-2", "docker-3", "docker-4", "docker-5", "docker-6"],
        hint: "Multi-stage: first Maven image builds the JAR, then a slim Temurin JRE image copies just the artifact and runs it."
    },
    {
        id: 4,
        title: "Kubernetes Pod Lifecycle",
        category: "DevOps",
        difficulty: "Hard",
        description: "A pod running your Spring Boot app keeps crashing on Amazon EKS. Your SRE team needs to understand the full K8s pod lifecycle to debug it. Arrange the states from scheduling to termination.",
        items: [
            { id: "k8s-1", label: "kube-scheduler Assigns", icon: "⏳", tech: "kube-scheduler" },
            { id: "k8s-2", label: "Init Container (Flyway)", icon: "🔧", tech: "Flyway Migration" },
            { id: "k8s-3", label: "containerd Starts Pod", icon: "🐳", tech: "containerd" },
            { id: "k8s-4", label: "Readiness Probe /health", icon: "💓", tech: "Spring Actuator" },
            { id: "k8s-5", label: "Ingress Routes Traffic", icon: "🌐", tech: "Nginx Ingress" },
            { id: "k8s-6", label: "SIGTERM + preStop Hook", icon: "🛑", tech: "Kubernetes Lifecycle" }
        ],
        correctOrder: ["k8s-1", "k8s-2", "k8s-3", "k8s-4", "k8s-5", "k8s-6"],
        hint: "kube-scheduler places the pod → Flyway init container runs DB migrations → containerd starts the app → Spring Actuator readiness probe passes → Ingress routes traffic → graceful shutdown with SIGTERM."
    },
    {
        id: 5,
        title: "Terraform IaC Workflow",
        category: "DevOps",
        difficulty: "Medium",
        description: "Your company is migrating 200 servers to AWS and the VP says: 'No more clicking in the console.' Set up the Terraform workflow. State is stored in an S3 backend and changes go through Azure DevOps pipelines.",
        items: [
            { id: "tf-1", label: "Write .tf Files (HCL)", icon: "📝", tech: "HashiCorp HCL" },
            { id: "tf-2", label: "terraform init (S3 Backend)", icon: "🔧", tech: "Terraform + AWS S3" },
            { id: "tf-3", label: "terraform plan", icon: "📋", tech: "Terraform Plan" },
            { id: "tf-4", label: "Azure DevOps PR Review", icon: "👀", tech: "Azure DevOps" },
            { id: "tf-5", label: "terraform apply -auto-approve", icon: "✅", tech: "Terraform Apply" },
            { id: "tf-6", label: "S3 State File Updated", icon: "💾", tech: "Terraform State (S3)" }
        ],
        correctOrder: ["tf-1", "tf-2", "tf-3", "tf-4", "tf-5", "tf-6"],
        hint: "Write HCL config → init with S3 backend → plan to preview → PR review in Azure DevOps → apply to create resources → state saved in S3."
    },
    {
        id: 6,
        title: "Ansible Configuration Mgmt",
        category: "DevOps",
        difficulty: "Medium",
        description: "Your ops team manually configures 50 CentOS servers and it takes a full week. The CTO wants you to automate everything with Ansible. Arrange the Ansible workflow from inventory to verification.",
        items: [
            { id: "ans-1", label: "Define Inventory (hosts.ini)", icon: "📋", tech: "Ansible Inventory" },
            { id: "ans-2", label: "Write Playbook (YAML)", icon: "📝", tech: "Ansible Playbook" },
            { id: "ans-3", label: "ansible-lint Validation", icon: "✔️", tech: "ansible-lint" },
            { id: "ans-4", label: "Molecule Test (Vagrant)", icon: "🧪", tech: "Molecule + Vagrant" },
            { id: "ans-5", label: "ansible-playbook --check", icon: "🔍", tech: "Ansible Dry Run" },
            { id: "ans-6", label: "ansible-playbook --apply", icon: "🚀", tech: "Ansible Apply" }
        ],
        correctOrder: ["ans-1", "ans-2", "ans-3", "ans-4", "ans-5", "ans-6"],
        hint: "Define which servers → write the playbook → lint for errors → test locally with Molecule → dry-run with --check → apply for real."
    },
    {
        id: 7,
        title: "GitHub Actions CI",
        category: "DevOps",
        difficulty: "Easy",
        description: "Your Node.js team is switching from manual testing to automated CI with GitHub Actions. The PM wants every PR to be automatically tested and linted before merge. Set up the GitHub Actions workflow steps.",
        items: [
            { id: "gha-1", label: "Push / PR Trigger", icon: "🔔", tech: "GitHub Webhooks" },
            { id: "gha-2", label: "actions/checkout@v4", icon: "📥", tech: "GitHub Actions" },
            { id: "gha-3", label: "actions/setup-node@v4", icon: "💚", tech: "Node.js 20 LTS" },
            { id: "gha-4", label: "npm ci (Install)", icon: "📦", tech: "npm" },
            { id: "gha-5", label: "ESLint + Prettier Check", icon: "🔍", tech: "ESLint / Prettier" },
            { id: "gha-6", label: "Jest Test Suite", icon: "🧪", tech: "Jest" }
        ],
        correctOrder: ["gha-1", "gha-2", "gha-3", "gha-4", "gha-5", "gha-6"],
        hint: "Trigger on push/PR → checkout code → set up Node.js → install dependencies with npm ci → lint code → run tests."
    },
    {
        id: 8,
        title: "Helm Chart Deployment",
        category: "DevOps",
        difficulty: "Hard",
        description: "Your team is packaging a microservices app as a Helm chart for Kubernetes. The chart needs to go from local development to production via a Helm repository. Arrange the Helm workflow.",
        items: [
            { id: "helm-1", label: "helm create my-app", icon: "📝", tech: "Helm CLI" },
            { id: "helm-2", label: "Edit values.yaml", icon: "⚙️", tech: "Helm Values" },
            { id: "helm-3", label: "helm lint ./my-app", icon: "✔️", tech: "Helm Lint" },
            { id: "helm-4", label: "helm package ./my-app", icon: "📦", tech: "Helm Package" },
            { id: "helm-5", label: "Push to ChartMuseum", icon: "🏛️", tech: "ChartMuseum" },
            { id: "helm-6", label: "helm upgrade --install", icon: "🚀", tech: "Helm Upgrade" }
        ],
        correctOrder: ["helm-1", "helm-2", "helm-3", "helm-4", "helm-5", "helm-6"],
        hint: "Create the chart scaffold → configure values → lint for errors → package the chart → push to repository → install/upgrade in the cluster."
    },

    // ==================== Git Puzzles ====================
    {
        id: 9,
        title: "Git Feature Branch Workflow",
        category: "Git",
        difficulty: "Easy",
        description: "Your team just adopted a feature branch workflow. A new developer asks you to walk them through the process of building a feature from start to finish. Show them the correct order — from creating a branch to getting it merged into main.",
        items: [
            { id: "git-fb-1", label: "git checkout -b feature/login", icon: "🌿", tech: "Git Branch" },
            { id: "git-fb-2", label: "Write Code & Save Files", icon: "💻", tech: "VS Code" },
            { id: "git-fb-3", label: "git add -A (Stage Changes)", icon: "📦", tech: "Git Staging" },
            { id: "git-fb-4", label: "git commit -m 'feat: login'", icon: "💾", tech: "Git Commit" },
            { id: "git-fb-5", label: "git push origin feature/login", icon: "🚀", tech: "Git Push" },
            { id: "git-fb-6", label: "Open Pull Request & Merge", icon: "🔀", tech: "GitHub PR" }
        ],
        correctOrder: ["git-fb-1", "git-fb-2", "git-fb-3", "git-fb-4", "git-fb-5", "git-fb-6"],
        hint: "Create a feature branch → write code → stage changes → commit → push to remote → open a PR and merge."
    },
    {
        id: 10,
        title: "Git Rebase vs Merge",
        category: "Git",
        difficulty: "Medium",
        description: "Your feature branch is 5 commits behind main and the team lead says 'rebase before merging, we keep a linear history.' You've never rebased before. Arrange the steps to rebase your branch onto main and push.",
        items: [
            { id: "git-rb-1", label: "git checkout feature/api", icon: "🌿", tech: "Git Checkout" },
            { id: "git-rb-2", label: "git fetch origin", icon: "📥", tech: "Git Fetch" },
            { id: "git-rb-3", label: "git rebase origin/main", icon: "🔄", tech: "Git Rebase" },
            { id: "git-rb-4", label: "Resolve Any Conflicts", icon: "⚔️", tech: "Conflict Resolution" },
            { id: "git-rb-5", label: "git rebase --continue", icon: "▶️", tech: "Git Rebase Continue" },
            { id: "git-rb-6", label: "git push --force-with-lease", icon: "🚀", tech: "Git Force Push" }
        ],
        correctOrder: ["git-rb-1", "git-rb-2", "git-rb-3", "git-rb-4", "git-rb-5", "git-rb-6"],
        hint: "Switch to your branch → fetch latest → rebase onto main → fix conflicts → continue rebase → force push (safely) since history changed."
    },
    {
        id: 11,
        title: "Git Conflict Resolution",
        category: "Git",
        difficulty: "Medium",
        description: "You and a teammate both edited the same file. When you try to pull, Git shows a merge conflict. Your PM is waiting for this fix. Arrange the steps to properly resolve the conflict and push.",
        items: [
            { id: "git-cf-1", label: "git pull origin main", icon: "📥", tech: "Git Pull" },
            { id: "git-cf-2", label: "See CONFLICT in terminal", icon: "⚠️", tech: "Git Merge Conflict" },
            { id: "git-cf-3", label: "Open file & edit <<<< markers", icon: "✏️", tech: "VS Code Merge Editor" },
            { id: "git-cf-4", label: "git add resolved-file.js", icon: "📦", tech: "Git Stage" },
            { id: "git-cf-5", label: "git commit (merge commit)", icon: "💾", tech: "Git Merge Commit" },
            { id: "git-cf-6", label: "git push origin main", icon: "🚀", tech: "Git Push" }
        ],
        correctOrder: ["git-cf-1", "git-cf-2", "git-cf-3", "git-cf-4", "git-cf-5", "git-cf-6"],
        hint: "Pull and get conflict → see the conflict notification → manually edit the conflict markers → stage the resolved file → commit the merge → push."
    },
    {
        id: 12,
        title: "Git Stash Workflow",
        category: "Git",
        difficulty: "Easy",
        description: "You're halfway through a feature when a critical bug report comes in. You need to switch branches immediately, but you don't want to lose your work. Use git stash to save and restore your changes.",
        items: [
            { id: "git-st-1", label: "git stash save 'WIP: feature'", icon: "📦", tech: "Git Stash" },
            { id: "git-st-2", label: "git checkout hotfix/bug-123", icon: "🌿", tech: "Git Checkout" },
            { id: "git-st-3", label: "Fix the Bug & Commit", icon: "🐛", tech: "Bug Fix" },
            { id: "git-st-4", label: "git checkout feature/dashboard", icon: "🔙", tech: "Git Checkout" },
            { id: "git-st-5", label: "git stash pop", icon: "📤", tech: "Git Stash Pop" },
            { id: "git-st-6", label: "Continue Feature Work", icon: "💻", tech: "Development" }
        ],
        correctOrder: ["git-st-1", "git-st-2", "git-st-3", "git-st-4", "git-st-5", "git-st-6"],
        hint: "Stash your current changes → switch to hotfix branch → fix and commit → switch back to feature branch → pop your stash → continue working."
    },
    {
        id: 13,
        title: "Git Cherry-Pick Hotfix",
        category: "Git",
        difficulty: "Medium",
        description: "A critical fix was committed to the develop branch, but production is on the release/v2.1 branch and needs it NOW. You can't merge all of develop — only that one specific commit. Use git cherry-pick.",
        items: [
            { id: "git-cp-1", label: "git log develop (find hash)", icon: "🔍", tech: "Git Log" },
            { id: "git-cp-2", label: "git checkout release/v2.1", icon: "🌿", tech: "Git Checkout" },
            { id: "git-cp-3", label: "git cherry-pick abc1234", icon: "🍒", tech: "Git Cherry-Pick" },
            { id: "git-cp-4", label: "Resolve Conflicts (if any)", icon: "⚔️", tech: "Conflict Resolution" },
            { id: "git-cp-5", label: "Run Tests & Verify", icon: "🧪", tech: "Test Suite" },
            { id: "git-cp-6", label: "git push origin release/v2.1", icon: "🚀", tech: "Git Push" }
        ],
        correctOrder: ["git-cp-1", "git-cp-2", "git-cp-3", "git-cp-4", "git-cp-5", "git-cp-6"],
        hint: "Find the commit hash in develop → switch to release branch → cherry-pick the specific commit → resolve any conflicts → test it → push."
    },
    {
        id: 14,
        title: "Gitflow Release Cycle",
        category: "Git",
        difficulty: "Hard",
        description: "Your company uses Gitflow and it's release week. Features are done on develop, and you need to cut a release branch, stabilize it, tag it, and merge to both main and develop. Arrange the full release cycle.",
        items: [
            { id: "git-gf-1", label: "git checkout -b release/v3.0 develop", icon: "🌿", tech: "Release Branch" },
            { id: "git-gf-2", label: "Bump Version & Fix Bugs", icon: "🔧", tech: "Version Bump" },
            { id: "git-gf-3", label: "QA Testing on Release Branch", icon: "🧪", tech: "Quality Assurance" },
            { id: "git-gf-4", label: "git merge release/v3.0 → main", icon: "🔀", tech: "Merge to Main" },
            { id: "git-gf-5", label: "git tag -a v3.0.0 -m 'Release'", icon: "🏷️", tech: "Git Tag" },
            { id: "git-gf-6", label: "git merge release/v3.0 → develop", icon: "🔄", tech: "Back-merge" }
        ],
        correctOrder: ["git-gf-1", "git-gf-2", "git-gf-3", "git-gf-4", "git-gf-5", "git-gf-6"],
        hint: "Branch from develop → bump version & fix bugs → QA test → merge to main → tag the release → merge back to develop."
    },
    {
        id: 15,
        title: "Git Bisect Bug Hunt",
        category: "Git",
        difficulty: "Medium",
        description: "A regression bug appeared somewhere in the last 50 commits. Testing each one manually would take hours. Your senior dev says: 'use git bisect — it binary searches through commits to find the bad one.' Arrange the steps.",
        items: [
            { id: "git-bs-1", label: "git bisect start", icon: "🔍", tech: "Git Bisect" },
            { id: "git-bs-2", label: "git bisect bad (current)", icon: "❌", tech: "Mark Bad Commit" },
            { id: "git-bs-3", label: "git bisect good v2.0.0", icon: "✅", tech: "Mark Good Commit" },
            { id: "git-bs-4", label: "Test → git bisect good/bad", icon: "🧪", tech: "Binary Search Test" },
            { id: "git-bs-5", label: "Git finds the guilty commit", icon: "🎯", tech: "First Bad Commit" },
            { id: "git-bs-6", label: "git bisect reset", icon: "🔄", tech: "Git Bisect Reset" }
        ],
        correctOrder: ["git-bs-1", "git-bs-2", "git-bs-3", "git-bs-4", "git-bs-5", "git-bs-6"],
        hint: "Start bisect → mark current as bad → mark known good version → test each checkout and mark good/bad → Git finds the culprit → reset to normal."
    },
    {
        id: 16,
        title: "Git Submodule Setup",
        category: "Git",
        difficulty: "Hard",
        description: "Your monorepo is getting too big and the team decides to extract a shared component library into its own repo and include it as a Git submodule. Arrange the steps to add and manage the submodule.",
        items: [
            { id: "git-sm-1", label: "git submodule add <url> libs/ui", icon: "📦", tech: "Git Submodule Add" },
            { id: "git-sm-2", label: ".gitmodules file created", icon: "📝", tech: ".gitmodules Config" },
            { id: "git-sm-3", label: "git commit -m 'add ui submodule'", icon: "💾", tech: "Git Commit" },
            { id: "git-sm-4", label: "Teammate: git submodule init", icon: "🔧", tech: "Submodule Init" },
            { id: "git-sm-5", label: "git submodule update --remote", icon: "📥", tech: "Submodule Update" },
            { id: "git-sm-6", label: "Commit updated submodule ref", icon: "🔗", tech: "Update Reference" }
        ],
        correctOrder: ["git-sm-1", "git-sm-2", "git-sm-3", "git-sm-4", "git-sm-5", "git-sm-6"],
        hint: "Add submodule → .gitmodules is auto-created → commit the addition → teammates init the submodule → update to latest → commit the new reference."
    },

    // ==================== Middleware Puzzles ====================
    {
        id: 17,
        title: "API Gateway Middleware",
        category: "Middleware",
        difficulty: "Medium",
        description: "Your fintech API built with Express.js is getting hammered by bots. The security team wants a bulletproof middleware chain on the Kong API Gateway. Arrange the middleware in the order requests pass through.",
        items: [
            { id: "apigw-1", label: "Kong Rate Limiting", icon: "🚦", tech: "Kong Gateway" },
            { id: "apigw-2", label: "Keycloak JWT Auth", icon: "🔑", tech: "Keycloak" },
            { id: "apigw-3", label: "Joi Schema Validation", icon: "✔️", tech: "Joi" },
            { id: "apigw-4", label: "Express.js Middleware", icon: "🔄", tech: "Express.js" },
            { id: "apigw-5", label: "Route to Microservice", icon: "🗺️", tech: "Kong Service Mesh" },
            { id: "apigw-6", label: "Redis Response Cache", icon: "💾", tech: "Redis" }
        ],
        correctOrder: ["apigw-1", "apigw-2", "apigw-3", "apigw-4", "apigw-5", "apigw-6"],
        hint: "Kong rate-limits first, Keycloak validates the JWT token, Joi checks the input schema, Express processes it, Kong routes to the service, Redis caches the response."
    },
    {
        id: 18,
        title: "Message Queue Pattern",
        category: "Middleware",
        difficulty: "Hard",
        description: "Your food delivery app (built with Spring Boot) needs to process thousands of orders per minute without losing any. The team uses RabbitMQ for async messaging. Build the message flow from order placement to error handling.",
        items: [
            { id: "mq-1", label: "Spring Boot Producer", icon: "📤", tech: "Spring AMQP" },
            { id: "mq-2", label: "RabbitMQ Exchange", icon: "🔀", tech: "RabbitMQ Exchange" },
            { id: "mq-3", label: "RabbitMQ Order Queue", icon: "📬", tech: "RabbitMQ Queue" },
            { id: "mq-4", label: "Spring @RabbitListener", icon: "⚙️", tech: "Spring Consumer" },
            { id: "mq-5", label: "RabbitMQ Retry Queue", icon: "🔁", tech: "RabbitMQ DLX Retry" },
            { id: "mq-6", label: "Dead Letter Queue (DLQ)", icon: "💀", tech: "RabbitMQ DLQ" }
        ],
        correctOrder: ["mq-1", "mq-2", "mq-3", "mq-4", "mq-5", "mq-6"],
        hint: "Spring Boot sends via AMQP → RabbitMQ exchange routes → queue holds → @RabbitListener consumes → failed messages go to retry → then dead letter queue."
    },
    {
        id: 19,
        title: "Monitoring Stack (ELK)",
        category: "Middleware",
        difficulty: "Hard",
        description: "Your microservices (Spring Boot + Node.js) are running but nobody knows what's happening inside them. The CTO says: 'I want Grafana dashboards by Monday.' Build the observability pipeline using the Elastic Stack.",
        items: [
            { id: "elk-1", label: "Spring Boot Logback", icon: "📄", tech: "Logback / Winston" },
            { id: "elk-2", label: "Filebeat Agent", icon: "📦", tech: "Elastic Filebeat" },
            { id: "elk-3", label: "Logstash Pipeline", icon: "⚙️", tech: "Logstash" },
            { id: "elk-4", label: "Elasticsearch Cluster", icon: "🗄️", tech: "Elasticsearch" },
            { id: "elk-5", label: "Grafana Dashboards", icon: "📊", tech: "Grafana" },
            { id: "elk-6", label: "PagerDuty Alerts", icon: "🚨", tech: "PagerDuty" }
        ],
        correctOrder: ["elk-1", "elk-2", "elk-3", "elk-4", "elk-5", "elk-6"],
        hint: "Apps log via Logback/Winston → Filebeat ships logs → Logstash parses and transforms → Elasticsearch stores/indexes → Grafana visualizes → PagerDuty alerts on-call."
    },
    {
        id: 20,
        title: "Kafka Event Streaming",
        category: "Middleware",
        difficulty: "Hard",
        description: "Your ride-sharing app needs real-time event processing for millions of ride events per second. The team chose Apache Kafka. Build the event streaming pipeline from ride request to analytics.",
        items: [
            { id: "kafka-1", label: "Ride Event Producer", icon: "🚗", tech: "Spring Kafka Producer" },
            { id: "kafka-2", label: "Kafka Topic Partition", icon: "📨", tech: "Kafka Topic" },
            { id: "kafka-3", label: "Kafka Consumer Group", icon: "👥", tech: "Kafka Consumer" },
            { id: "kafka-4", label: "Kafka Streams Processing", icon: "🔄", tech: "Kafka Streams" },
            { id: "kafka-5", label: "Sink to ClickHouse", icon: "🗄️", tech: "Kafka Connect + ClickHouse" },
            { id: "kafka-6", label: "Superset Analytics", icon: "📊", tech: "Apache Superset" }
        ],
        correctOrder: ["kafka-1", "kafka-2", "kafka-3", "kafka-4", "kafka-5", "kafka-6"],
        hint: "Producer sends events → Kafka topic partitions store them → consumer group reads → Kafka Streams processes in real-time → sink connector writes to ClickHouse → Superset visualizes analytics."
    },
    {
        id: 21,
        title: "OAuth 2.0 Login Flow",
        category: "Middleware",
        difficulty: "Medium",
        description: "Your SaaS application needs 'Login with Google' functionality. The frontend uses React and the backend runs on Express.js with Passport.js. Arrange the OAuth 2.0 Authorization Code flow steps.",
        items: [
            { id: "oauth-1", label: "User Clicks 'Login with Google'", icon: "👤", tech: "React Frontend" },
            { id: "oauth-2", label: "Redirect to Google OAuth", icon: "🔗", tech: "Google OAuth 2.0" },
            { id: "oauth-3", label: "User Grants Permission", icon: "✅", tech: "Google Consent Screen" },
            { id: "oauth-4", label: "Auth Code → Backend Callback", icon: "📩", tech: "Passport.js Callback" },
            { id: "oauth-5", label: "Exchange Code for Token", icon: "🔑", tech: "Google Token Endpoint" },
            { id: "oauth-6", label: "Create Session + JWT", icon: "🎫", tech: "express-session + JWT" }
        ],
        correctOrder: ["oauth-1", "oauth-2", "oauth-3", "oauth-4", "oauth-5", "oauth-6"],
        hint: "User initiates → redirect to Google → user consents → Google sends auth code to backend → backend exchanges code for access token → create local session with JWT."
    },
    {
        id: 22,
        title: "GraphQL API Architecture",
        category: "Middleware",
        difficulty: "Medium",
        description: "Your e-commerce team is migrating from REST to GraphQL. The backend uses Apollo Server with Node.js, connecting to multiple data sources. Arrange the layers of the GraphQL API architecture from client to database.",
        items: [
            { id: "gql-1", label: "React + Apollo Client", icon: "⚛️", tech: "Apollo Client" },
            { id: "gql-2", label: "GraphQL Query / Mutation", icon: "📝", tech: "GraphQL SDL" },
            { id: "gql-3", label: "Apollo Server Resolver", icon: "⚙️", tech: "Apollo Server" },
            { id: "gql-4", label: "DataLoader Batching", icon: "📦", tech: "DataLoader" },
            { id: "gql-5", label: "Prisma ORM Query", icon: "💎", tech: "Prisma" },
            { id: "gql-6", label: "PostgreSQL Database", icon: "🗄️", tech: "PostgreSQL" }
        ],
        correctOrder: ["gql-1", "gql-2", "gql-3", "gql-4", "gql-5", "gql-6"],
        hint: "React sends query via Apollo Client → GraphQL schema validates → resolvers execute → DataLoader batches requests → Prisma ORM translates to SQL → PostgreSQL returns data."
    },
    {
        id: 23,
        title: "Redis Caching Strategy",
        category: "Middleware",
        difficulty: "Easy",
        description: "Your product page API is slow, taking 3 seconds per request. The team decides to add Redis as a caching layer. Arrange the cache-aside (lazy-loading) pattern from request to cache population.",
        items: [
            { id: "redis-1", label: "API Request Received", icon: "📥", tech: "Express.js / FastAPI" },
            { id: "redis-2", label: "Check Redis Cache", icon: "🔍", tech: "Redis GET" },
            { id: "redis-3", label: "Cache Miss Detected", icon: "❌", tech: "Redis MISS" },
            { id: "redis-4", label: "Query MongoDB", icon: "🗄️", tech: "MongoDB" },
            { id: "redis-5", label: "Store in Redis (TTL 5min)", icon: "💾", tech: "Redis SET EX 300" },
            { id: "redis-6", label: "Return JSON Response", icon: "📤", tech: "JSON Response" }
        ],
        correctOrder: ["redis-1", "redis-2", "redis-3", "redis-4", "redis-5", "redis-6"],
        hint: "Request comes in → check Redis first → cache miss → query the database → store result in Redis with TTL → return the response."
    },
    {
        id: 24,
        title: "Nginx Reverse Proxy Setup",
        category: "Middleware",
        difficulty: "Easy",
        description: "Your team runs multiple services on one server: a React frontend, a Node.js API, and a Django admin panel. You need to set up Nginx as a reverse proxy to route traffic. Arrange the Nginx configuration steps.",
        items: [
            { id: "ngx-1", label: "Install Nginx (apt)", icon: "📦", tech: "apt install nginx" },
            { id: "ngx-2", label: "Create sites-available Config", icon: "📝", tech: "nginx.conf" },
            { id: "ngx-3", label: "Define Upstream Backends", icon: "🔧", tech: "Nginx upstream block" },
            { id: "ngx-4", label: "Set location Proxy Rules", icon: "🗺️", tech: "proxy_pass directive" },
            { id: "ngx-5", label: "certbot SSL Certificate", icon: "🔐", tech: "Certbot + Let's Encrypt" },
            { id: "ngx-6", label: "systemctl reload nginx", icon: "🔄", tech: "systemd" }
        ],
        correctOrder: ["ngx-1", "ngx-2", "ngx-3", "ngx-4", "ngx-5", "ngx-6"],
        hint: "Install Nginx → create config file → define upstream servers → set proxy rules for each path → add SSL with Certbot → reload Nginx to apply."
    },

    // ==================== More Git Puzzles ====================
    {
        id: 25,
        title: "Git Hooks CI Pipeline",
        category: "Git",
        difficulty: "Medium",
        description: "Your team wants to catch issues BEFORE code even reaches GitHub. The lead engineer sets up Git hooks using Husky to lint, test, and validate commit messages locally. Arrange the hooks in the order they fire during a commit + push.",
        items: [
            { id: "git-hk-1", label: "pre-commit: lint-staged", icon: "🔍", tech: "Husky + lint-staged" },
            { id: "git-hk-2", label: "ESLint + Prettier Fix", icon: "✨", tech: "ESLint / Prettier" },
            { id: "git-hk-3", label: "commit-msg: commitlint", icon: "📝", tech: "commitlint" },
            { id: "git-hk-4", label: "pre-push: npm test", icon: "🧪", tech: "Jest" },
            { id: "git-hk-5", label: "All Hooks Pass ✓", icon: "✅", tech: "Git Hooks" },
            { id: "git-hk-6", label: "Push Reaches Remote", icon: "🚀", tech: "Git Push" }
        ],
        correctOrder: ["git-hk-1", "git-hk-2", "git-hk-3", "git-hk-4", "git-hk-5", "git-hk-6"],
        hint: "pre-commit runs lint-staged → ESLint/Prettier fix files → commit-msg validates the message format → pre-push runs tests → all pass → push goes through."
    },
    {
        id: 26,
        title: "Git Reset & Recovery",
        category: "Git",
        difficulty: "Hard",
        description: "You accidentally ran 'git reset --hard' and lost 3 commits of work. Panic sets in. But your senior dev tells you Git never truly deletes commits — they're in the reflog. Arrange the recovery steps.",
        items: [
            { id: "git-rr-1", label: "git reflog (find lost commits)", icon: "📜", tech: "Git Reflog" },
            { id: "git-rr-2", label: "Identify target commit hash", icon: "🔍", tech: "Commit Hash" },
            { id: "git-rr-3", label: "git checkout -b recovery abc123", icon: "🌿", tech: "Recovery Branch" },
            { id: "git-rr-4", label: "Verify recovered code", icon: "✅", tech: "Code Review" },
            { id: "git-rr-5", label: "git checkout main", icon: "🔙", tech: "Git Checkout" },
            { id: "git-rr-6", label: "git merge recovery", icon: "🔀", tech: "Git Merge" }
        ],
        correctOrder: ["git-rr-1", "git-rr-2", "git-rr-3", "git-rr-4", "git-rr-5", "git-rr-6"],
        hint: "Check reflog → find the commit hash before the reset → create a recovery branch at that hash → verify the code is correct → switch to main → merge recovery branch."
    },
    {
        id: 27,
        title: "Conventional Commits Flow",
        category: "Git",
        difficulty: "Easy",
        description: "Your team is adopting Conventional Commits to auto-generate changelogs and semantic versions. The new format requires a specific commit message structure. Arrange the steps from writing code to generating a release changelog.",
        items: [
            { id: "git-cc-1", label: "Make Code Changes", icon: "💻", tech: "Development" },
            { id: "git-cc-2", label: "git add changed files", icon: "📦", tech: "Git Stage" },
            { id: "git-cc-3", label: "Write: feat(auth): add SSO", icon: "📝", tech: "Conventional Commit" },
            { id: "git-cc-4", label: "commitlint Validates Format", icon: "✔️", tech: "commitlint" },
            { id: "git-cc-5", label: "semantic-release Analyzes", icon: "🤖", tech: "semantic-release" },
            { id: "git-cc-6", label: "CHANGELOG.md Updated", icon: "📋", tech: "Auto Changelog" }
        ],
        correctOrder: ["git-cc-1", "git-cc-2", "git-cc-3", "git-cc-4", "git-cc-5", "git-cc-6"],
        hint: "Write code → stage files → write a conventional commit message (type(scope): description) → commitlint validates → semantic-release reads commits → CHANGELOG is auto-generated."
    },
    {
        id: 28,
        title: "Git Tag & Release",
        category: "Git",
        difficulty: "Easy",
        description: "Version 2.0 of your app is ready. The PM says: 'Tag it, push it, and create a GitHub Release with the binary.' You've never created a release before. Arrange the steps from tagging to publishing.",
        items: [
            { id: "git-tr-1", label: "git tag -a v2.0.0 -m 'v2.0'", icon: "🏷️", tech: "Annotated Tag" },
            { id: "git-tr-2", label: "git push origin v2.0.0", icon: "🚀", tech: "Push Tag" },
            { id: "git-tr-3", label: "Go to GitHub Releases page", icon: "🌐", tech: "GitHub UI" },
            { id: "git-tr-4", label: "Create Release from tag", icon: "📋", tech: "GitHub Release" },
            { id: "git-tr-5", label: "Write Release Notes", icon: "📝", tech: "Markdown Notes" },
            { id: "git-tr-6", label: "Attach Build Artifacts", icon: "📦", tech: "Binary Assets" }
        ],
        correctOrder: ["git-tr-1", "git-tr-2", "git-tr-3", "git-tr-4", "git-tr-5", "git-tr-6"],
        hint: "Create an annotated tag → push the tag to remote → go to GitHub Releases → create a release from the tag → write release notes → upload build artifacts."
    },
    {
        id: 29,
        title: "Monorepo Sparse Checkout",
        category: "Git",
        difficulty: "Hard",
        description: "Your company has a massive monorepo (50GB) with 20 microservices. You only work on the 'payments' service. Your laptop can't clone the whole thing. Use Git sparse-checkout to clone only what you need.",
        items: [
            { id: "git-sp-1", label: "git clone --filter=blob:none", icon: "📥", tech: "Partial Clone" },
            { id: "git-sp-2", label: "git sparse-checkout init --cone", icon: "🔧", tech: "Sparse Init" },
            { id: "git-sp-3", label: "git sparse-checkout set services/payments", icon: "📂", tech: "Set Paths" },
            { id: "git-sp-4", label: "Only payments/ files appear", icon: "✅", tech: "Filtered Worktree" },
            { id: "git-sp-5", label: "Work & Commit Normally", icon: "💻", tech: "Git Commit" },
            { id: "git-sp-6", label: "git push (only your changes)", icon: "🚀", tech: "Git Push" }
        ],
        correctOrder: ["git-sp-1", "git-sp-2", "git-sp-3", "git-sp-4", "git-sp-5", "git-sp-6"],
        hint: "Partial clone (no blobs) → init sparse-checkout in cone mode → set the paths you need → only those files are checked out → work normally → push only your changes."
    },
    {
        id: 30,
        title: "Interactive Rebase Cleanup",
        category: "Git",
        difficulty: "Medium",
        description: "Your feature branch has 8 messy commits like 'WIP', 'fix typo', 'oops'. Before opening a PR, your team requires a clean commit history. Use interactive rebase to squash and reword commits.",
        items: [
            { id: "git-ir-1", label: "git rebase -i HEAD~8", icon: "📝", tech: "Interactive Rebase" },
            { id: "git-ir-2", label: "Mark commits: squash/fixup", icon: "🔧", tech: "Rebase Commands" },
            { id: "git-ir-3", label: "Reword remaining commits", icon: "✏️", tech: "Reword Commit" },
            { id: "git-ir-4", label: "Save & close editor", icon: "💾", tech: "Vim / VS Code" },
            { id: "git-ir-5", label: "Resolve conflicts (if any)", icon: "⚔️", tech: "Conflict Resolution" },
            { id: "git-ir-6", label: "git push --force-with-lease", icon: "🚀", tech: "Safe Force Push" }
        ],
        correctOrder: ["git-ir-1", "git-ir-2", "git-ir-3", "git-ir-4", "git-ir-5", "git-ir-6"],
        hint: "Start interactive rebase for last 8 commits → mark WIP commits as squash/fixup → reword the remaining → save editor → resolve any conflicts → force push with lease."
    },

    // ==================== CI/CD Puzzles ====================
    {
        id: 31,
        title: "Azure DevOps Pipeline",
        category: "DevOps",
        difficulty: "Medium",
        description: "Your .NET team is migrating from manual deployments to Azure DevOps Pipelines. The PM wants a fully automated CI/CD pipeline that builds, tests, and deploys a .NET 8 API to Azure App Service. Arrange the pipeline stages.",
        items: [
            { id: "azdo-1", label: "azure-pipelines.yml Trigger", icon: "🔔", tech: "Azure Pipelines YAML" },
            { id: "azdo-2", label: "dotnet restore + build", icon: "🔨", tech: ".NET CLI" },
            { id: "azdo-3", label: "dotnet test (xUnit)", icon: "🧪", tech: "xUnit / NUnit" },
            { id: "azdo-4", label: "dotnet publish -o ./output", icon: "📦", tech: ".NET Publish" },
            { id: "azdo-5", label: "Azure Artifact Feed Push", icon: "📤", tech: "Azure Artifacts" },
            { id: "azdo-6", label: "Deploy to Azure App Service", icon: "🚀", tech: "AzureWebApp@1 Task" }
        ],
        correctOrder: ["azdo-1", "azdo-2", "azdo-3", "azdo-4", "azdo-5", "azdo-6"],
        hint: "Pipeline triggers on push → restore & build .NET → run xUnit tests → publish build output → push to Azure Artifacts → deploy to Azure App Service."
    },
    {
        id: 32,
        title: "ArgoCD GitOps + K8s Deploy",
        category: "DevOps",
        difficulty: "Hard",
        description: "Your team uses ArgoCD to manage Kubernetes deployments via GitOps. A developer pushes a new Docker image and needs it deployed to the staging cluster automatically. Arrange the full ArgoCD deployment flow.",
        items: [
            { id: "argo-1", label: "Push Code → Build Docker Image", icon: "🐳", tech: "GitHub Actions + Docker" },
            { id: "argo-2", label: "Push Image to Container Registry", icon: "📤", tech: "Docker Hub / ECR / ACR" },
            { id: "argo-3", label: "Update K8s Manifest (image tag)", icon: "📝", tech: "Kustomize / Helm values" },
            { id: "argo-4", label: "ArgoCD Detects Manifest Change", icon: "🔄", tech: "ArgoCD App Controller" },
            { id: "argo-5", label: "ArgoCD Syncs to K8s Cluster", icon: "☸️", tech: "kubectl apply (ArgoCD)" },
            { id: "argo-6", label: "Health Check + Rollback Ready", icon: "✅", tech: "ArgoCD Health Assessment" }
        ],
        correctOrder: ["argo-1", "argo-2", "argo-3", "argo-4", "argo-5", "argo-6"],
        hint: "Build Docker image → push to registry → update K8s manifest with new tag → ArgoCD detects the Git change → syncs to cluster → runs health checks."
    },
    {
        id: 33,
        title: "GitLab CI/CD + Docker + K8s",
        category: "DevOps",
        difficulty: "Hard",
        description: "Your startup uses GitLab for everything — code, CI/CD, and container registry. The Go microservice needs to be built as a Docker image, scanned for vulnerabilities, and deployed to a K8s cluster via Helm. Arrange the .gitlab-ci.yml stages.",
        items: [
            { id: "glab-1", label: "Build Stage: go build", icon: "🔨", tech: "Go Compiler" },
            { id: "glab-2", label: "Test Stage: go test ./...", icon: "🧪", tech: "Go Testing" },
            { id: "glab-3", label: "Docker Build + Push to GitLab CR", icon: "🐳", tech: "GitLab Container Registry" },
            { id: "glab-4", label: "Trivy Security Scan", icon: "🔍", tech: "Aqua Trivy" },
            { id: "glab-5", label: "Helm Upgrade --install (staging)", icon: "⎈", tech: "Helm 3" },
            { id: "glab-6", label: "Manual Approval → Prod Deploy", icon: "🚀", tech: "GitLab Environments" }
        ],
        correctOrder: ["glab-1", "glab-2", "glab-3", "glab-4", "glab-5", "glab-6"],
        hint: "Compile Go → run tests → build Docker image & push to GitLab registry → scan for CVEs with Trivy → Helm deploy to staging → manual gate before production."
    },
    {
        id: 34,
        title: "Jenkins Blue-Green Deploy",
        category: "DevOps",
        difficulty: "Hard",
        description: "Your e-commerce platform can't afford downtime during deployments. The team uses Jenkins to orchestrate blue-green deployments on Kubernetes with an Nginx ingress controller. Arrange the zero-downtime deployment steps.",
        items: [
            { id: "jen-1", label: "Jenkins Build + Test Pipeline", icon: "🔨", tech: "Jenkinsfile (Groovy)" },
            { id: "jen-2", label: "Deploy 'Green' Version to K8s", icon: "🟢", tech: "kubectl apply (green)" },
            { id: "jen-3", label: "Run Smoke Tests on Green", icon: "🧪", tech: "Newman / Postman" },
            { id: "jen-4", label: "Switch Ingress to Green", icon: "🔀", tech: "Nginx Ingress Rules" },
            { id: "jen-5", label: "Monitor Green (Prometheus)", icon: "📊", tech: "Prometheus + Grafana" },
            { id: "jen-6", label: "Tear Down Blue (old version)", icon: "🗑️", tech: "kubectl delete (blue)" }
        ],
        correctOrder: ["jen-1", "jen-2", "jen-3", "jen-4", "jen-5", "jen-6"],
        hint: "Build & test → deploy the new 'green' version alongside 'blue' → smoke test green → switch traffic to green → monitor → tear down the old blue."
    },
    {
        id: 35,
        title: "K8s Rolling Update Strategy",
        category: "DevOps",
        difficulty: "Medium",
        description: "Your API runs 5 replicas on Kubernetes. A new version is ready and the team wants zero-downtime rolling updates. The deployment uses readiness probes and a maxSurge/maxUnavailable strategy. Arrange the rolling update lifecycle.",
        items: [
            { id: "kru-1", label: "Update Deployment Image Tag", icon: "📝", tech: "kubectl set image" },
            { id: "kru-2", label: "K8s Creates New ReplicaSet", icon: "🆕", tech: "ReplicaSet Controller" },
            { id: "kru-3", label: "New Pods Start (maxSurge: 1)", icon: "🔼", tech: "Rolling Update Strategy" },
            { id: "kru-4", label: "Readiness Probe Passes", icon: "💓", tech: "HTTP /healthz Probe" },
            { id: "kru-5", label: "Old Pods Terminated Gradually", icon: "🔽", tech: "maxUnavailable: 0" },
            { id: "kru-6", label: "All 5 Replicas on New Version", icon: "✅", tech: "kubectl rollout status" }
        ],
        correctOrder: ["kru-1", "kru-2", "kru-3", "kru-4", "kru-5", "kru-6"],
        hint: "Update the image tag → K8s creates a new ReplicaSet → new pods start one at a time → readiness probe confirms they're healthy → old pods drain → all replicas updated."
    },
    {
        id: 36,
        title: "GitHub Actions → Docker → K8s",
        category: "DevOps",
        difficulty: "Medium",
        description: "Your Node.js API uses GitHub Actions for CI/CD. On every push to main, it needs to build a Docker image, push it to GitHub Container Registry (GHCR), and deploy to a K8s cluster using kubectl. Arrange the workflow steps.",
        items: [
            { id: "ghak-1", label: "Push to main triggers workflow", icon: "🔔", tech: "on: push (main)" },
            { id: "ghak-2", label: "Checkout + Setup Node + Test", icon: "🧪", tech: "actions/checkout + Jest" },
            { id: "ghak-3", label: "docker/build-push-action", icon: "🐳", tech: "Docker Build + GHCR" },
            { id: "ghak-4", label: "Login to GHCR (GITHUB_TOKEN)", icon: "🔑", tech: "docker/login-action" },
            { id: "ghak-5", label: "Set kubeconfig from Secrets", icon: "⚙️", tech: "azure/k8s-set-context" },
            { id: "ghak-6", label: "kubectl apply -f k8s/deploy.yml", icon: "🚀", tech: "kubectl apply" }
        ],
        correctOrder: ["ghak-1", "ghak-2", "ghak-3", "ghak-4", "ghak-5", "ghak-6"],
        hint: "Push triggers workflow → checkout & run tests → build Docker image → push to GHCR with token auth → configure kubectl with secrets → apply K8s manifests."
    },

    // ==================== Java Spring & Node.js CI/CD Puzzles ====================
    {
        id: 37,
        title: "Spring Boot → Maven → Docker → K8s",
        category: "DevOps",
        difficulty: "Medium",
        description: "Your team's new Spring Boot 3.2 API is ready. The lead DevOps engineer needs to build the full CI/CD pipeline: compile with Maven, run tests, containerize with Docker, push to a registry, and deploy to Kubernetes via Helm. Arrange the pipeline stages.",
        items: [
            { id: "sbci-1", label: "mvn clean package -DskipTests=false", icon: "🔨", tech: "Maven Build" },
            { id: "sbci-2", label: "JUnit 5 + Testcontainers Tests", icon: "🧪", tech: "JUnit 5 / Testcontainers" },
            { id: "sbci-3", label: "SonarQube Code Quality Gate", icon: "📊", tech: "SonarQube Scanner" },
            { id: "sbci-4", label: "Docker Build (multi-stage JDK 21)", icon: "🐳", tech: "Dockerfile" },
            { id: "sbci-5", label: "Push Image to Harbor Registry", icon: "📤", tech: "Harbor / ECR" },
            { id: "sbci-6", label: "Helm Upgrade to K8s Staging", icon: "⎈", tech: "Helm 3 + K8s" }
        ],
        correctOrder: ["sbci-1", "sbci-2", "sbci-3", "sbci-4", "sbci-5", "sbci-6"],
        hint: "Maven compiles the JAR → JUnit + Testcontainers run integration tests → SonarQube checks code quality → multi-stage Docker build → push to Harbor → Helm deploys to K8s."
    },
    {
        id: 38,
        title: "Spring Boot CVE Hotfix Pipeline",
        category: "DevOps",
        difficulty: "Hard",
        description: "A critical CVE (Log4Shell-level) hits your Spring Boot production app on Friday night. Your CISO demands a hotfix deployed within 2 hours. The team must branch, patch, fast-track through CI/CD, and deploy — all while keeping the pipeline safe. Arrange the emergency release flow.",
        items: [
            { id: "cve-1", label: "git checkout -b hotfix/cve-2024", icon: "🌿", tech: "Git Hotfix Branch" },
            { id: "cve-2", label: "Patch pom.xml + Maven BOM Override", icon: "🔧", tech: "Maven Dependency Mgmt" },
            { id: "cve-3", label: "CI: Build + OWASP Dependency-Check", icon: "🛡️", tech: "OWASP + Jenkins/GHA" },
            { id: "cve-4", label: "Docker Build + Trivy Image Scan", icon: "🐳", tech: "Trivy Scanner" },
            { id: "cve-5", label: "Fast-track Deploy to Staging + Smoke Test", icon: "🧪", tech: "Newman / k6" },
            { id: "cve-6", label: "kubectl rollout to Production", icon: "🚀", tech: "K8s Rolling Update" }
        ],
        correctOrder: ["cve-1", "cve-2", "cve-3", "cve-4", "cve-5", "cve-6"],
        hint: "Create hotfix branch → patch vulnerable dependency → CI builds and scans for CVEs → Docker image scanned with Trivy → smoke test on staging → rolling deploy to production."
    },
    {
        id: 39,
        title: "Node.js Express → Docker → AWS ECS",
        category: "DevOps",
        difficulty: "Medium",
        description: "Your startup's Express.js API is being moved from a single EC2 instance to AWS ECS Fargate for autoscaling. The DevOps team builds a GitHub Actions pipeline that tests, Dockerizes, and deploys to ECS with zero downtime. Arrange the pipeline.",
        items: [
            { id: "necs-1", label: "GitHub Actions: npm ci + Jest", icon: "🧪", tech: "GitHub Actions + Jest" },
            { id: "necs-2", label: "npm audit --audit-level=high", icon: "🛡️", tech: "npm Security Audit" },
            { id: "necs-3", label: "Docker Build (node:22-alpine)", icon: "🐳", tech: "Multi-stage Dockerfile" },
            { id: "necs-4", label: "Push to Amazon ECR", icon: "📤", tech: "AWS ECR" },
            { id: "necs-5", label: "Update ECS Task Definition", icon: "📋", tech: "ECS Task Def (JSON)" },
            { id: "necs-6", label: "ECS Service Rolling Deploy", icon: "🚀", tech: "AWS ECS Fargate" }
        ],
        correctOrder: ["necs-1", "necs-2", "necs-3", "necs-4", "necs-5", "necs-6"],
        hint: "CI runs tests → npm audit checks vulnerabilities → Docker build with Alpine → push to ECR → update ECS task definition with new image → ECS rolling deployment."
    },
    {
        id: 40,
        title: "Spring Boot Canary on K8s",
        category: "DevOps",
        difficulty: "Hard",
        description: "Your e-commerce Spring Boot API handles $2M/day. The team can't risk a bad deployment. The SRE sets up a canary release: deploy the new version to 10% of traffic, monitor error rates with Prometheus, and gradually shift to 100%. Arrange the canary pipeline.",
        items: [
            { id: "sbc-1", label: "CI: Maven Build + Docker Push", icon: "🐳", tech: "Jenkins / GitLab CI" },
            { id: "sbc-2", label: "Deploy Canary (10% traffic split)", icon: "🐤", tech: "Istio VirtualService" },
            { id: "sbc-3", label: "Prometheus: Monitor Error Rate", icon: "📊", tech: "Prometheus + Grafana" },
            { id: "sbc-4", label: "Automated Analysis (Flagger)", icon: "🤖", tech: "Flagger / Argo Rollouts" },
            { id: "sbc-5", label: "Gradual Shift: 50% → 100%", icon: "📈", tech: "Traffic Splitting" },
            { id: "sbc-6", label: "Old Version Scaled Down", icon: "✅", tech: "K8s Rollout Complete" }
        ],
        correctOrder: ["sbc-1", "sbc-2", "sbc-3", "sbc-4", "sbc-5", "sbc-6"],
        hint: "Build & push Docker image → deploy canary with 10% traffic → monitor metrics → automated analysis decides go/no-go → gradually increase traffic → old version scales down."
    },
    {
        id: 41,
        title: "Node.js npm Vulnerability Pipeline",
        category: "DevOps",
        difficulty: "Medium",
        description: "Snyk just flagged 5 critical vulnerabilities in your Node.js production API's dependencies. The security team gives you 24 hours. You need to patch, re-test, and push through the full CI/CD pipeline with a security-focused workflow. Arrange the steps.",
        items: [
            { id: "nvp-1", label: "Snyk Report: Identify Critical CVEs", icon: "🔍", tech: "Snyk / npm audit" },
            { id: "nvp-2", label: "npm update + Fix Breaking Changes", icon: "🔧", tech: "npm / yarn" },
            { id: "nvp-3", label: "CI: Jest Tests + Snyk Re-scan", icon: "🧪", tech: "GitHub Actions + Snyk" },
            { id: "nvp-4", label: "Docker Build + Trivy Image Scan", icon: "🐳", tech: "Trivy Container Scan" },
            { id: "nvp-5", label: "Deploy to Staging + DAST Scan", icon: "🌐", tech: "OWASP ZAP" },
            { id: "nvp-6", label: "Promote to Production (K8s)", icon: "🚀", tech: "ArgoCD Sync" }
        ],
        correctOrder: ["nvp-1", "nvp-2", "nvp-3", "nvp-4", "nvp-5", "nvp-6"],
        hint: "Identify CVEs in Snyk report → patch dependencies → CI re-tests and re-scans → Docker+Trivy image scan → deploy to staging with DAST scan → promote to production."
    },
    {
        id: 42,
        title: "Spring Monolith → Microservices CD",
        category: "DevOps",
        difficulty: "Hard",
        description: "Your company is splitting a massive Spring Boot monolith into 4 microservices. Each service needs its own CI/CD pipeline, Docker image, Helm chart, and K8s namespace. The DevOps team designs the multi-service deployment orchestration. Arrange the CD flow.",
        items: [
            { id: "sms-1", label: "Mono-repo CI: Build Changed Services", icon: "🔨", tech: "Maven Modules + Path Filter" },
            { id: "sms-2", label: "Run Service-Level Integration Tests", icon: "🧪", tech: "Testcontainers + WireMock" },
            { id: "sms-3", label: "Docker Build per Microservice", icon: "🐳", tech: "docker-compose build" },
            { id: "sms-4", label: "Push All Images to Registry", icon: "📤", tech: "Harbor / ACR" },
            { id: "sms-5", label: "ArgoCD App-of-Apps Sync", icon: "🔄", tech: "ArgoCD ApplicationSet" },
            { id: "sms-6", label: "K8s: Each Service in Own Namespace", icon: "☸️", tech: "K8s Namespaces + Istio" }
        ],
        correctOrder: ["sms-1", "sms-2", "sms-3", "sms-4", "sms-5", "sms-6"],
        hint: "Build only changed services in mono-repo → run integration tests per service → Docker build each → push all images → ArgoCD app-of-apps syncs all → each service deploys to its K8s namespace."
    }
];
