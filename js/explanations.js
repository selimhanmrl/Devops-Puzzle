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
    9: [ // DNS Resolution
        "Chrome first checks its internal DNS cache (chrome://net-internals/#dns). If found, it returns immediately.",
        "If not in browser cache, the OS resolver checks its own cache and the hosts file (/etc/hosts or C:\\Windows\\System32\\drivers\\etc\\hosts).",
        "Cloudflare's recursive resolver (1.1.1.1) starts the full DNS lookup if the answer isn't cached anywhere locally.",
        "The recursive resolver first queries one of the 13 root DNS servers to find which TLD server handles .com domains.",
        "Verisign operates the .com TLD servers. It responds with the authoritative nameserver for example.com.",
        "Namecheap's authoritative nameserver returns the actual IP address (A record) for shop.example.com."
    ],
    10: [ // TCP/IP
        "HTTP/2 at Layer 7 formats the request with headers, methods (GET/POST), and multiplexes multiple streams over one connection.",
        "TCP at Layer 4 provides reliable delivery — it segments data, manages flow control, and retransmits lost packets. Port 443 = HTTPS.",
        "IPv4 at Layer 3 handles routing — adding source/destination IP addresses so routers know where to forward packets.",
        "Ethernet at Layer 2 wraps IP packets in frames with MAC addresses for local network delivery between switches and NICs.",
        "The physical layer converts bits into electrical signals (Cat6 copper) or light pulses (fiber optic) for transmission."
    ],
    11: [ // Load Balancer
        "The user's browser sends an HTTPS request. The browser resolves DNS and initiates a TCP connection.",
        "CloudFront CDN serves static assets (images, CSS, JS) from edge locations worldwide, reducing latency by 60-80%.",
        "AWS WAF (Web Application Firewall) inspects requests for SQL injection, XSS, and bot traffic. Bad requests are blocked.",
        "Nginx load balancer distributes traffic across multiple Spring Boot instances using round-robin or least-connections algorithm.",
        "The Spring Boot cluster processes business logic. Multiple instances run behind the LB for high availability.",
        "PostgreSQL stores persistent data; Redis caches hot data in-memory for sub-millisecond reads (sessions, product catalog)."
    ],
    12: [ // TLS Handshake
        "The client sends a ClientHello with supported TLS versions, cipher suites, and a random number for key generation.",
        "Nginx responds with its Let's Encrypt certificate containing the server's public key and the certificate chain.",
        "The browser verifies the certificate chain: server cert → Let's Encrypt intermediate → ISRG Root X1 (trusted CA).",
        "ECDHE (Elliptic Curve Diffie-Hellman Ephemeral) generates a shared secret without ever transmitting the key. Provides forward secrecy.",
        "Both sides derive the same AES-256-GCM session key from the shared secret. This symmetric key encrypts all subsequent data.",
        "All HTTP traffic is now encrypted. Even if intercepted, the data is unreadable without the session key."
    ],
    13: [ // VPN
        "WireGuard generates a public/private key pair using Curve25519 elliptic curve cryptography. Each peer needs its own pair.",
        "The wg0.conf file defines the interface IP, private key, peer's public key, allowed IPs, and the endpoint address.",
        "AWS VPC route tables are updated to send traffic destined for the office subnet through the VPN tunnel interface.",
        "AWS Security Group must allow UDP port 51820 (WireGuard's default) inbound from the office's public IP.",
        "wg-quick up wg0 activates the tunnel — creates the virtual interface, sets routes, and starts the handshake.",
        "Ping and traceroute verify connectivity. Traffic should route through the tunnel (10.x.x.x) instead of the public internet."
    ],
    14: [ // HTTP Request Lifecycle
        "The browser parses the URL, extracts the hostname, and performs DNS resolution to get the server's IP address.",
        "A TCP 3-way handshake establishes a reliable connection: client sends SYN, server replies SYN-ACK, client confirms with ACK.",
        "For HTTPS (port 443), a TLS handshake negotiates encryption. This adds ~1 RTT but secures all subsequent communication.",
        "The browser sends an HTTP GET request with headers (User-Agent, Accept, Cookies) over the encrypted connection.",
        "The web server (Nginx/Apache) processes the request, possibly proxying to an app server, and returns HTML with a 200 OK status.",
        "Chrome's Blink engine parses HTML, builds the DOM, applies CSS styles, executes JavaScript (V8), and renders pixels to screen."
    ],
    15: [ // Firewall Rules
        "ESTABLISHED/RELATED rule matches packets belonging to existing connections. This is the fast path — most traffic hits this first.",
        "INVALID packets (malformed, impossible TCP flag combinations) are dropped immediately. These are often port scans or attacks.",
        "SSH access (port 22) is whitelisted, usually restricted to specific source IPs. OpenSSH provides encrypted remote administration.",
        "HTTP (80) and HTTPS (443) are opened for Nginx to serve web traffic. Port 80 typically redirects to 443.",
        "hashlimit module rate-limits NEW connections per source IP (e.g., 20/min) to prevent DDoS and brute-force attacks.",
        "The default DROP policy blocks everything not explicitly allowed. This 'deny all' approach is the foundation of firewall security."
    ],
    16: [ // VLAN
        "Network engineers plan IP subnets for each VLAN — e.g., VLAN 10 (192.168.10.0/24 Management), VLAN 20 (192.168.20.0/24 Users).",
        "VLANs are created on the Cisco switch using IOS CLI: 'vlan 10' + 'name Management'. Each VLAN is a separate broadcast domain.",
        "Each physical switch port is assigned to a VLAN: 'switchport mode access' + 'switchport access vlan 10'. Devices only see their VLAN.",
        "Trunk ports carry multiple VLANs between switches using 802.1Q tagging. A 4-byte tag identifies which VLAN each frame belongs to.",
        "pfSense acts as the router between VLANs. Without it, VLAN 10 and VLAN 20 are completely isolated from each other.",
        "Access Control Lists on pfSense define which VLANs can talk to which — e.g., allow Users→Servers but block Users→Management."
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
    25: [ // K8s Service Networking
        "Pod A uses the Kubernetes DNS name (svc-b.namespace.svc.cluster.local) to call another service — no IP addresses needed.",
        "CoreDNS resolves the service name to a ClusterIP (virtual IP). CoreDNS is the default DNS server in Kubernetes clusters.",
        "The ClusterIP is a virtual IP assigned by kube-apiserver when the Service resource is created. It's not routable outside the cluster.",
        "kube-proxy maintains iptables/IPVS rules on every node that translate the ClusterIP to actual pod IPs (DNAT).",
        "The Endpoints API tracks which pods are backing the service. Only pods passing readiness probes appear as endpoints.",
        "Traffic arrives at Pod B via the CNI plugin (Calico, Flannel, Cilium) which handles pod-to-pod networking across nodes."
    ],
    26: [ // K8s RBAC
        "A ServiceAccount is created in the target namespace. It's like a user identity for programmatic access within the cluster.",
        "A Role defines WHAT can be accessed — specifying API groups (core, apps), resources (pods, deployments), and namespaces.",
        "Verbs define HOW resources can be accessed. get/list/watch = read-only. create/update/delete = write access.",
        "RoleBinding connects the Role to the ServiceAccount — it says 'this SA has these permissions in this namespace'.",
        "A kubeconfig file is generated with the SA's token. This file is given to the developer to configure their kubectl CLI.",
        "kubectl auth can-i verifies the setup: 'can-i get pods --namespace staging' should return 'yes'; 'can-i delete pods' should return 'no'."
    ],
    27: [ // K8s HPA
        "Metrics Server collects CPU and memory usage from kubelets on every node. Without it, HPA has no data to act on.",
        "Resource requests (e.g., cpu: 250m) MUST be set on pods. HPA calculates utilization as a percentage of the request, not the node capacity.",
        "The HPA resource is created with a target: 'scale deployment/api --cpu-percent=70 --min=2 --max=10'. It polls metrics every 15 seconds.",
        "When traffic spikes, CPU usage exceeds the 70% target. HPA detects this within 15-30 seconds.",
        "The HPA controller calculates the desired replica count: desiredReplicas = ceil(currentReplicas × currentMetric / targetMetric).",
        "kube-scheduler finds nodes with available resources and places new pods. They pass readiness probes and start serving traffic."
    ],
    28: [ // CrashLoopBackOff
        "kubectl get pods shows STATUS: CrashLoopBackOff with increasing RESTARTS count. The pod keeps crashing and Kubernetes keeps restarting it.",
        "kubectl describe pod shows Events — look for 'Back-off restarting failed container', image pull errors, or OOMKilled messages.",
        "kubectl logs --previous shows logs from the LAST crashed container (since the current one hasn't started). This reveals the actual error.",
        "Exit codes tell the story: 1 = application error, 137 = OOMKilled (out of memory), 143 = SIGTERM, 0 = normal exit (but wrong restart policy).",
        "Common fixes: update ConfigMap with correct values, fix missing Secrets (database passwords), increase memory limits, or fix the application bug.",
        "kubectl rollout restart deployment/app recreates all pods with the fixed configuration. The old ReplicaSet scales down gracefully."
    ],
    29: [ // K8s Ingress + TLS
        "The ingress-nginx Helm chart deploys the Nginx Ingress Controller as a Deployment + LoadBalancer Service in the cluster.",
        "cert-manager is a Kubernetes operator that automates TLS certificate lifecycle — requesting, renewing, and storing certs as Secrets.",
        "The ClusterIssuer resource configures Let's Encrypt ACME protocol. It can use HTTP-01 or DNS-01 challenges to prove domain ownership.",
        "An Ingress resource defines routing rules: host 'app.example.com' path '/' → Service 'app-service' port 80.",
        "Adding tls section with secretName tells cert-manager to request a certificate. The cert is stored as a K8s TLS Secret automatically.",
        "A DNS A record pointing app.example.com to the LoadBalancer's external IP completes the setup. HTTPS works end-to-end."
    ],
    30: [ // K8s Secrets Management
        "HashiCorp Vault is deployed via Helm as a StatefulSet with persistent storage. It provides centralized secrets with access policies.",
        "The KV v2 secrets engine is enabled at a path (e.g., secret/). V2 provides versioning — you can roll back to previous secret values.",
        "vault kv put stores credentials: 'vault kv put secret/db username=admin password=s3cr3t'. Access is controlled by Vault policies.",
        "The External Secrets Operator (ESO) is a K8s controller that watches for ExternalSecret resources and syncs secrets from external stores.",
        "An ExternalSecret CR specifies: which Vault path to read, which keys to extract, and which K8s Secret to create/update.",
        "ESO automatically creates a native K8s Secret synced from Vault. Pods reference it via envFrom or volume mounts — zero code changes needed."
    ]
};

// Merge explanations into PUZZLES array
PUZZLES.forEach(puzzle => {
    if (EXPLANATIONS[puzzle.id]) {
        puzzle.explanation = EXPLANATIONS[puzzle.id];
    }
});
