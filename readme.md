# Kafka Node.js Consumer & Producer

This repository contains a simple Node.js application demonstrating Kafka consumer and producer functionality using the `kafkajs` library.

## Overview

The application is divided into two main components:
1. **Consumer**: Listens to the `rider-updates` topic and logs messages to the console.
2. **Producer**: Sends messages to the `rider-updates` topic with information on rider locations.

## Prerequisites

- **Docker**: Ensure Docker is installed on your system.
- **Kafka**: The application assumes that a Kafka broker is running and accessible.

## Installation

### Step 1: Start Zookeeper

First, start a Zookeeper container and expose it on port 2181.

```bash
docker run -p 2181:2181 zookeeper
```

### Step 2: Start Kafka

Next, start a Kafka container, expose it on port 9092, and set up the necessary environment variables. Replace <PRIVATE_IP> with your private IP address.

```bash
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

### Step 3: Clone Repository & Install Dependencies

Clone this repository and install the necessary Node.js dependencies:

```bash
git clone <repository-url>
cd <repository-directory>
npm install
```

## Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

