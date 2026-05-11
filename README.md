# LinkArmor: Production-Grade URL Shortener

LinkArmor is a high-performance, secure URL shortening system built with **NestJS**, **Oracle Database**, and **Redis**. This project focuses on production-ready engineering practices, robust security, and advanced system design.

## 🚀 Key Features

- **High-Performance Shortening**: Sub-millisecond URL redirection using optimized database indexing.
- **Advanced Rate Limiting**: Protection against DDoS and brute-force attacks using **Redis-based Token Bucket** logic.
- **Real-time Analytics**: Tracking IP addresses, User-Agents, and click timestamps with specialized indexing for high-volume data.
- **Production Infrastructure**: Fully containerized environment using **Docker Compose**.
- **Data Integrity**: Powered by **Oracle Database** for enterprise-grade persistence and ACID compliance.

## 🏗 System Architecture & Design Patterns

- **Clean Architecture**: Modular design separating concerns into Controllers, Services, Entities, and DTOs.
- **Data Structures (DSA) in Practice**:
  - **Hash Tables**: Used for O(1) cache lookups in Redis.
  - **B-Trees**: Leveraged via Oracle's indexing system for efficient range queries in analytics.
  - **Linked Lists**: Implemented for collision handling in custom data structure labs.
- **Security Guards**: Custom NestJS Guards for traffic control and request validation.

## 🛠 Tech Stack

- **Framework**: [NestJS](https://nestjs.com/) (TypeScript)
- **Primary Database**: Oracle Database 21c
- **Cache & Rate Limiting**: Redis
- **Persistence Layer**: TypeORM
- **Validation**: Class-validator & Class-transformer
- **Infrastructure**: Docker & Docker Compose
- **Package Manager**: pnpm (Optimized dependency management)

## 🚦 Getting Started

### Prerequisites
- Node.js (v18+)
- pnpm
- Docker & Docker Compose

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd url-shortener
   ```
2. Install dependencies (optimized with pnpm):
   ```bash
   pnpm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory and configure your Oracle and Redis credentials.

4. Start the infrastructure:
   ```bash
   docker-compose up -d
   ```
5. Run the application:
   ```bash
   pnpm run start:dev
   ```

## 📊 Performance Testing
Simulated using `autocannon`, the system handles over **14,000+ requests per second** while maintaining strict rate limits to protect backend resources.

---
**Developed with focus on Scalability, Security, and System Engineering.**
