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

    // ==================== Network Puzzles ====================
    {
        id: 9,
        title: "DNS Resolution",
        category: "Network",
        difficulty: "Easy",
        description: "Users report that shop.example.com isn't loading. You need to trace exactly how a browser resolves a domain name. The company uses Cloudflare DNS (1.1.1.1) and their domain is registered on Namecheap. Arrange the DNS resolution chain.",
        items: [
            { id: "dns-1", label: "Chrome Browser Cache", icon: "🌐", tech: "Chrome" },
            { id: "dns-2", label: "Windows DNS Resolver", icon: "💻", tech: "OS Resolver" },
            { id: "dns-3", label: "Cloudflare 1.1.1.1", icon: "🔄", tech: "Cloudflare DNS" },
            { id: "dns-4", label: "ICANN Root Server", icon: "🌍", tech: "Root DNS (.)" },
            { id: "dns-5", label: "Verisign .com TLD", icon: "🏷️", tech: "Verisign" },
            { id: "dns-6", label: "Namecheap Authoritative NS", icon: "✅", tech: "Namecheap DNS" }
        ],
        correctOrder: ["dns-1", "dns-2", "dns-3", "dns-4", "dns-5", "dns-6"],
        hint: "DNS starts at the browser cache, then the OS resolver, then Cloudflare's recursive server, then root → .com TLD (Verisign) → authoritative nameserver (Namecheap)."
    },
    {
        id: 10,
        title: "TCP/IP Network Stack",
        category: "Network",
        difficulty: "Medium",
        description: "A junior network engineer asks you to explain how an HTTP request travels from a React frontend to the network. Walk them through the OSI layers with the actual protocols used at each level.",
        items: [
            { id: "tcpip-1", label: "HTTP/2 (Application)", icon: "📱", tech: "HTTP/2" },
            { id: "tcpip-2", label: "TCP Port 443 (Transport)", icon: "🔌", tech: "TCP" },
            { id: "tcpip-3", label: "IPv4 Routing (Network)", icon: "🗺️", tech: "IPv4" },
            { id: "tcpip-4", label: "Ethernet Frame (Data Link)", icon: "🔗", tech: "IEEE 802.3" },
            { id: "tcpip-5", label: "Cat6 / Fiber (Physical)", icon: "⚡", tech: "Cat6 / Fiber Optic" }
        ],
        correctOrder: ["tcpip-1", "tcpip-2", "tcpip-3", "tcpip-4", "tcpip-5"],
        hint: "Top to bottom: HTTP/2 at application, TCP at transport, IPv4 handles routing, Ethernet frames at data link, physical cables carry the signals."
    },
    {
        id: 11,
        title: "Load Balancer Architecture",
        category: "Network",
        difficulty: "Medium",
        description: "Your e-commerce platform needs to handle 50,000 concurrent users during Black Friday. The architect uses AWS services with Nginx and PostgreSQL. The sticky notes fell off the whiteboard — put them back from user to database.",
        items: [
            { id: "lb-1", label: "User's Browser", icon: "👤", tech: "Chrome / Firefox" },
            { id: "lb-2", label: "CloudFront CDN", icon: "🌐", tech: "AWS CloudFront" },
            { id: "lb-3", label: "AWS WAF Firewall", icon: "🛡️", tech: "AWS WAF" },
            { id: "lb-4", label: "Nginx Load Balancer", icon: "⚖️", tech: "Nginx" },
            { id: "lb-5", label: "Spring Boot Cluster", icon: "🍃", tech: "Spring Boot" },
            { id: "lb-6", label: "PostgreSQL + Redis", icon: "🗄️", tech: "PostgreSQL / Redis" }
        ],
        correctOrder: ["lb-1", "lb-2", "lb-3", "lb-4", "lb-5", "lb-6"],
        hint: "Traffic flows: Browser → CloudFront (cached assets) → AWS WAF (blocks attacks) → Nginx (distributes load) → Spring Boot apps → PostgreSQL with Redis cache."
    },
    {
        id: 12,
        title: "SSL/TLS Handshake",
        category: "Network",
        difficulty: "Hard",
        description: "A banking app's customers see 'Connection Not Secure' warnings. The app uses Let's Encrypt certificates behind an Nginx reverse proxy. You need to trace the TLS 1.3 handshake to diagnose the certificate issue.",
        items: [
            { id: "tls-1", label: "Client Hello (TLS 1.3)", icon: "👋", tech: "TLS 1.3" },
            { id: "tls-2", label: "Nginx Sends Certificate", icon: "📜", tech: "Nginx + Let's Encrypt" },
            { id: "tls-3", label: "CA Chain Verification", icon: "🔍", tech: "Let's Encrypt CA" },
            { id: "tls-4", label: "ECDHE Key Exchange", icon: "🔑", tech: "Elliptic Curve DH" },
            { id: "tls-5", label: "AES-256-GCM Session Key", icon: "🔐", tech: "AES-256-GCM" },
            { id: "tls-6", label: "Encrypted HTTPS Traffic", icon: "🔒", tech: "HTTPS" }
        ],
        correctOrder: ["tls-1", "tls-2", "tls-3", "tls-4", "tls-5", "tls-6"],
        hint: "TLS 1.3: Client Hello → Nginx responds with Let's Encrypt cert → browser verifies the CA chain → ECDHE key exchange → AES-256 session key → encrypted communication."
    },
    {
        id: 13,
        title: "VPN Tunnel Setup",
        category: "Network",
        difficulty: "Medium",
        description: "Your company's remote workers need secure access to internal resources. The network team is setting up a site-to-site VPN using WireGuard between the office and AWS VPC. Arrange the VPN setup process.",
        items: [
            { id: "vpn-1", label: "Generate WireGuard Keys", icon: "🔑", tech: "wg genkey / pubkey" },
            { id: "vpn-2", label: "Configure wg0.conf", icon: "📝", tech: "WireGuard Config" },
            { id: "vpn-3", label: "Set AWS VPC Routes", icon: "🗺️", tech: "AWS VPC Route Table" },
            { id: "vpn-4", label: "Open UDP Port 51820", icon: "🔓", tech: "AWS Security Group" },
            { id: "vpn-5", label: "wg-quick up wg0", icon: "▶️", tech: "WireGuard CLI" },
            { id: "vpn-6", label: "Verify with ping + traceroute", icon: "✅", tech: "ping / traceroute" }
        ],
        correctOrder: ["vpn-1", "vpn-2", "vpn-3", "vpn-4", "vpn-5", "vpn-6"],
        hint: "Generate key pairs → configure WireGuard interface → set VPC routing → open firewall port → bring tunnel up → verify connectivity."
    },
    {
        id: 14,
        title: "HTTP Request Lifecycle",
        category: "Network",
        difficulty: "Easy",
        description: "A frontend developer asks 'What happens when I type a URL in the browser?' Walk them through the full lifecycle of an HTTP request from the address bar to the rendered page.",
        items: [
            { id: "http-1", label: "URL Parsing + DNS Lookup", icon: "🔍", tech: "Browser Engine" },
            { id: "http-2", label: "TCP 3-Way Handshake", icon: "🤝", tech: "TCP SYN/ACK" },
            { id: "http-3", label: "TLS Handshake (HTTPS)", icon: "🔐", tech: "TLS 1.3" },
            { id: "http-4", label: "HTTP GET Request Sent", icon: "📤", tech: "HTTP/2" },
            { id: "http-5", label: "Server Response (200 OK)", icon: "📥", tech: "Nginx / Apache" },
            { id: "http-6", label: "Browser Renders HTML/CSS", icon: "🖥️", tech: "Chrome V8 / Blink" }
        ],
        correctOrder: ["http-1", "http-2", "http-3", "http-4", "http-5", "http-6"],
        hint: "Parse URL and resolve DNS → establish TCP connection → negotiate TLS → send the HTTP request → receive response → render the page."
    },
    {
        id: 15,
        title: "Firewall Rule Chain",
        category: "Network",
        difficulty: "Hard",
        description: "Your Linux server is exposed to the internet and you need to configure iptables/nftables firewall rules. The security team requires specific ordering of rules for incoming traffic. Arrange the firewall rule evaluation order.",
        items: [
            { id: "fw-1", label: "Accept Established/Related", icon: "✅", tech: "conntrack (stateful)" },
            { id: "fw-2", label: "Drop Invalid Packets", icon: "🚫", tech: "iptables DROP" },
            { id: "fw-3", label: "Allow SSH (Port 22)", icon: "🔑", tech: "OpenSSH" },
            { id: "fw-4", label: "Allow HTTP/HTTPS (80/443)", icon: "🌐", tech: "Nginx Ports" },
            { id: "fw-5", label: "Rate Limit New Connections", icon: "🚦", tech: "iptables hashlimit" },
            { id: "fw-6", label: "Default DROP Policy", icon: "🛑", tech: "iptables -P DROP" }
        ],
        correctOrder: ["fw-1", "fw-2", "fw-3", "fw-4", "fw-5", "fw-6"],
        hint: "First allow existing connections (fast path), drop invalid, then whitelist specific ports, rate limit new connections, and finally default deny everything else."
    },
    {
        id: 16,
        title: "VLAN Network Segmentation",
        category: "Network",
        difficulty: "Hard",
        description: "Your company's flat network was compromised and the CISO demands network segmentation. The network team is implementing VLANs with a managed Cisco switch and pfSense firewall. Arrange the segmentation steps.",
        items: [
            { id: "vlan-1", label: "Design VLAN Subnets", icon: "📐", tech: "IP Subnetting" },
            { id: "vlan-2", label: "Create VLANs on Cisco Switch", icon: "🔧", tech: "Cisco IOS CLI" },
            { id: "vlan-3", label: "Assign Switch Ports to VLANs", icon: "🔌", tech: "802.1Q Access Ports" },
            { id: "vlan-4", label: "Configure Trunk Port", icon: "🔗", tech: "802.1Q Trunk" },
            { id: "vlan-5", label: "pfSense Inter-VLAN Routing", icon: "🛡️", tech: "pfSense" },
            { id: "vlan-6", label: "Apply ACL Firewall Rules", icon: "📋", tech: "pfSense ACL Rules" }
        ],
        correctOrder: ["vlan-1", "vlan-2", "vlan-3", "vlan-4", "vlan-5", "vlan-6"],
        hint: "Plan the subnets → create VLANs on the switch → assign ports → set up trunking → enable inter-VLAN routing on pfSense → apply access control lists."
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

    // ==================== Kubernetes Puzzles ====================
    {
        id: 25,
        title: "K8s Service Networking",
        category: "Kubernetes",
        difficulty: "Medium",
        description: "Your team deployed 3 microservices on Kubernetes but they can't communicate with each other. The network engineer needs to understand how K8s service discovery and networking works. Arrange the request flow from one pod to another.",
        items: [
            { id: "ksvc-1", label: "Pod A calls svc-b:8080", icon: "📤", tech: "K8s DNS Name" },
            { id: "ksvc-2", label: "CoreDNS Resolves Service", icon: "🔍", tech: "CoreDNS" },
            { id: "ksvc-3", label: "ClusterIP Allocated", icon: "🌐", tech: "kube-apiserver" },
            { id: "ksvc-4", label: "kube-proxy iptables Rule", icon: "🔀", tech: "kube-proxy" },
            { id: "ksvc-5", label: "Load Balance to Endpoint", icon: "⚖️", tech: "Endpoints API" },
            { id: "ksvc-6", label: "Traffic Reaches Pod B", icon: "✅", tech: "Container Network (CNI)" }
        ],
        correctOrder: ["ksvc-1", "ksvc-2", "ksvc-3", "ksvc-4", "ksvc-5", "ksvc-6"],
        hint: "Pod calls service name → CoreDNS resolves to ClusterIP → kube-proxy routes via iptables → load balances across endpoints → traffic arrives at the target pod via CNI."
    },
    {
        id: 26,
        title: "K8s RBAC Security",
        category: "Kubernetes",
        difficulty: "Hard",
        description: "A new developer joined your team and needs read-only access to pods in the 'staging' namespace on your EKS cluster. The security team requires least-privilege RBAC. Arrange the steps to grant scoped access.",
        items: [
            { id: "rbac-1", label: "Create ServiceAccount", icon: "👤", tech: "kubectl create sa" },
            { id: "rbac-2", label: "Define Role (pod reader)", icon: "📋", tech: "K8s Role (YAML)" },
            { id: "rbac-3", label: "Set verbs: get, list, watch", icon: "🔒", tech: "RBAC Verbs" },
            { id: "rbac-4", label: "Create RoleBinding", icon: "🔗", tech: "K8s RoleBinding" },
            { id: "rbac-5", label: "Generate kubeconfig Token", icon: "🔑", tech: "kubeconfig" },
            { id: "rbac-6", label: "Test with kubectl auth can-i", icon: "✅", tech: "kubectl auth can-i" }
        ],
        correctOrder: ["rbac-1", "rbac-2", "rbac-3", "rbac-4", "rbac-5", "rbac-6"],
        hint: "Create a service account → define a Role with pod permissions → restrict to get/list/watch verbs → bind role to the SA → generate kubeconfig → verify with can-i."
    },
    {
        id: 27,
        title: "K8s HPA Autoscaling",
        category: "Kubernetes",
        difficulty: "Medium",
        description: "Your API pods are overwhelmed during peak hours. The team wants Kubernetes to automatically scale pods based on CPU usage. Set up Horizontal Pod Autoscaler (HPA) from metrics collection to scaling action.",
        items: [
            { id: "hpa-1", label: "Deploy Metrics Server", icon: "📊", tech: "metrics-server" },
            { id: "hpa-2", label: "Set CPU Resource Requests", icon: "📋", tech: "resources.requests.cpu" },
            { id: "hpa-3", label: "Create HPA (target: 70%)", icon: "⚙️", tech: "kubectl autoscale" },
            { id: "hpa-4", label: "Load Increases → CPU Spikes", icon: "📈", tech: "Prometheus Metrics" },
            { id: "hpa-5", label: "HPA Controller Scales Up", icon: "🔼", tech: "kube-controller-manager" },
            { id: "hpa-6", label: "New Pods Scheduled + Ready", icon: "✅", tech: "kube-scheduler" }
        ],
        correctOrder: ["hpa-1", "hpa-2", "hpa-3", "hpa-4", "hpa-5", "hpa-6"],
        hint: "Install metrics-server → set CPU resource requests on pods → create HPA targeting 70% CPU → load comes in → HPA controller detects and scales → new pods get scheduled."
    },
    {
        id: 28,
        title: "K8s CrashLoopBackOff Debug",
        category: "Kubernetes",
        difficulty: "Hard",
        description: "It's 3 AM and your pod is stuck in CrashLoopBackOff. The on-call SRE needs to systematically diagnose and fix it. Arrange the troubleshooting steps from detection to resolution.",
        items: [
            { id: "crash-1", label: "kubectl get pods (CrashLoop)", icon: "🔴", tech: "kubectl get pods" },
            { id: "crash-2", label: "kubectl describe pod", icon: "🔍", tech: "kubectl describe" },
            { id: "crash-3", label: "kubectl logs --previous", icon: "📄", tech: "kubectl logs" },
            { id: "crash-4", label: "Check Events + Exit Codes", icon: "🔢", tech: "K8s Events API" },
            { id: "crash-5", label: "Fix ConfigMap / Secrets", icon: "🔧", tech: "kubectl edit cm" },
            { id: "crash-6", label: "kubectl rollout restart", icon: "🔄", tech: "kubectl rollout" }
        ],
        correctOrder: ["crash-1", "crash-2", "crash-3", "crash-4", "crash-5", "crash-6"],
        hint: "See the CrashLoop status → describe for events and conditions → check previous container logs → analyze exit codes → fix the config issue → restart the deployment."
    },
    {
        id: 29,
        title: "K8s Ingress + TLS Setup",
        category: "Kubernetes",
        difficulty: "Medium",
        description: "Your web app needs a public HTTPS endpoint on Kubernetes. The team uses Nginx Ingress Controller with cert-manager for automatic TLS certificates from Let's Encrypt. Set up the full Ingress stack.",
        items: [
            { id: "ing-1", label: "Install Nginx Ingress (Helm)", icon: "📦", tech: "ingress-nginx Helm" },
            { id: "ing-2", label: "Deploy cert-manager", icon: "🔐", tech: "cert-manager" },
            { id: "ing-3", label: "Create ClusterIssuer (LE)", icon: "📜", tech: "Let's Encrypt ACME" },
            { id: "ing-4", label: "Create Ingress Resource", icon: "🌐", tech: "K8s Ingress YAML" },
            { id: "ing-5", label: "Annotate tls + secretName", icon: "🔑", tech: "TLS Secret" },
            { id: "ing-6", label: "DNS A Record → LB IP", icon: "🗺️", tech: "Cloudflare DNS" }
        ],
        correctOrder: ["ing-1", "ing-2", "ing-3", "ing-4", "ing-5", "ing-6"],
        hint: "Install Ingress controller → install cert-manager → create Let's Encrypt issuer → create Ingress resource → add TLS annotation + secret → point DNS to the load balancer IP."
    },
    {
        id: 30,
        title: "K8s Secrets Management",
        category: "Kubernetes",
        difficulty: "Hard",
        description: "Your team stores database passwords in plain YAML manifests (bad!). The security audit requires proper secrets management. Migrate from plain secrets to HashiCorp Vault with the External Secrets Operator.",
        items: [
            { id: "sec-1", label: "Deploy HashiCorp Vault", icon: "🏛️", tech: "Vault (Helm)" },
            { id: "sec-2", label: "Enable KV Secrets Engine", icon: "🔧", tech: "Vault KV v2" },
            { id: "sec-3", label: "Store DB Creds in Vault", icon: "🔑", tech: "vault kv put" },
            { id: "sec-4", label: "Install External Secrets Op", icon: "📦", tech: "ESO (Helm)" },
            { id: "sec-5", label: "Create ExternalSecret CR", icon: "📋", tech: "ExternalSecret YAML" },
            { id: "sec-6", label: "K8s Secret Auto-Synced", icon: "✅", tech: "K8s Secret Object" }
        ],
        correctOrder: ["sec-1", "sec-2", "sec-3", "sec-4", "sec-5", "sec-6"],
        hint: "Deploy Vault → enable KV secrets engine → store credentials → install External Secrets Operator → create ExternalSecret custom resource → K8s secret is automatically synced from Vault."
    }
];
