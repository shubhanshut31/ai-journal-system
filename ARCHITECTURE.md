# System Architecture

This document explains the architectural decisions behind the AI-Assisted Journal System.

---

# High-Level Architecture

The system follows a **client-server architecture**.

Components:

1. Frontend (React)
2. Backend API (Node.js + Express)
3. Database (MongoDB)
4. LLM Service (external API).

Flow:

User → Frontend → Backend API → Database / LLM → Response → Frontend

---

# 1. How would you scale this to 100k users?

To support large traffic, the system can be scaled using several strategies.

### Horizontal Backend Scaling

The backend server can be deployed with multiple instances behind a load balancer.

Example architecture:

Load Balancer
→ Node.js Server 1
→ Node.js Server 2
→ Node.js Server 3

This distributes requests across multiple servers.

### Database Scaling

MongoDB can be scaled using:

* database indexing
* read replicas
* sharding

Indexes on:

* userId
* createdAt

This ensures faster query performance.

### Asynchronous Processing

LLM analysis can be processed asynchronously using a job queue.

Example:

API Request
→ Queue (Redis / RabbitMQ)
→ Worker Service
→ LLM Processing

This prevents the main API from blocking.

---

# 2. How would you reduce LLM cost?

LLM APIs can be expensive, so cost optimization is important.

### Caching Analysis Results

If the same journal text is analyzed multiple times, the result should be cached.

Text Hash → Analysis Result

If a cached result exists, the system returns it instead of calling the LLM.

### Use Smaller Models

Instead of large models, lightweight models can be used for simple tasks like emotion detection.

Example:

* Llama 3 small
* Mixtral small models

### Batch Processing

Instead of calling the LLM immediately for every entry, analysis can be done in batches.

---

# 3. How would you cache repeated analysis?

Repeated analysis can be cached using Redis.

Workflow:

1. User submits journal text
2. Backend generates a hash of the text
3. Redis cache is checked

If cache exists:

Return cached analysis

If cache does not exist:

Call LLM
Store result in Redis
Return response

Example key:

analysis:hash(text)

This reduces both latency and API cost.

---

# 4. How would you protect sensitive journal data?

Journal entries may contain sensitive personal information.

### Encryption

Sensitive data can be encrypted before storage using AES encryption.

### HTTPS

All communication between frontend and backend must be encrypted using HTTPS.

### Authentication

Users should be authenticated using JWT tokens to ensure users can only access their own journals.

### Database Security

* restrict database access
* enable role-based access control
* store API keys in environment variables

---

# Conclusion

This architecture ensures:

* scalability for large user bases
* reduced LLM costs
* efficient caching
* secure handling of sensitive user data
