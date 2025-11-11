# DePINNest

DePINNest - Decentralized EV Charging Network on Solana

Powering Africa’s Electric Future, One Charge at a Time
DePINNest is a DePIN-based EV charging protocol that connects IoT-powered charging stations with Solana smart contracts, NFT Smart Wallets, and Solana Pay for instant microtransactions and transparent ownership.

This repo provides a demo simulation + Docker container to run a lightweight prototype of a DePINNest charging node.

> MVP mock-node for proof-of-concept — not yet a production release.


## Core Vision

DePINNest = Electric Vehicle DePIN + Solana Payments

Think “Helium for EV charging” — community-driven infrastructure powered by Solana.

## Component	Purpose

Charging Node	Reports energy usage + session data
Solana Program	Handles instant payments & reward logic
NFT Smart Wallet	Represents ownership of charging node
USDC/SOL Payments	Pay per kWh usage via Solana Pay
On-Chain Logs	Transparent EV charging records


This repo includes a mock EV charging node for hackathon testing and DePIN simulation.


## Features

IoT-based energy metering simulation

REST API demo server

Express backend

NFT-based ownership concept

Solana Pay for microtransactions

Docker-deployable mock DePIN node

Anchor-based Solana contract integration (future release)


## Installation

Local Run

npm install
npm start

Docker Run

docker build -t depinnest-node .
docker run -p 3000:3000 depinnest-node

Open your browser → http://localhost:3000
You should see:

> Welcome to DePINNest EV Charging Demo!


## EV Charging Simulation

Future updates will include:

Real-time IoT meter feed (ESP32 → Solana RPC)

Smart contract interaction via Anchor

On-chain payment events tracking


Current version demonstrates:

Local node boot + API endpoint

Mock EV charging logic

Logging + health check system


Solana Architecture Overview

Layer	Technology

Chain	Solana
Smart Contracts	Anchor Framework
Ownership	NFT Smart Wallets
Payments	Solana Pay (USDC / SOL)
Interoperability	Axelar GMP (future)
Data Feed	IoT → REST → RPC


## Why Solana?

High-speed, low-cost microtransactions 

Ideal for real-time IoT data and micropayments

Perfect foundation for scalable DePIN infrastructure

Enables tokenized ownership and reward distribution


> DePINNest is where energy meets blockchain — fast, transparent, and community-powered.



## Folder Structure

depinnest/
├── index.js
├── package.json
├── Dockerfile
└── README.md


## Roadmap

Stage	Goal

MVP Launch	EV Charging Node Simulation
Q1 2026	Anchor Smart Contract Deployment
Q2 2026	NFT Smart Wallet Dashboard
Q3 2026	Multi-region Expansion (Axelar GMP)
Q4 2026	Charge-to-Earn System Launch


## Contribution

PRs and collaborations are welcome!
Join the movement to make DePIN-based EV infrastructure a reality.

Areas to contribute:

IoT firmware integration

Solana smart contracts

DePIN architecture optimization

Dashboard UI


## Reward Distribution:

DePINNest introduces a community-powered reward system that reflects how decentralized EV charging networks could operate in real life.
Each node (charging station) is tokenized and earns rewards based on performance, uptime, and verified energy usage.

## How It Works

IoT Integration: Each DePINNest node reports its real-time charging sessions and uptime data to the Solana blockchain.

Smart Contract Validation: The Solana program verifies the data to ensure authenticity and fairness.

Tokenized Rewards: Nodes receive DPN tokens as incentives for maintaining stable operation and serving real users.

On-Chain Distribution: Rewards are automatically sent to each node’s NFT Smart Wallet using Solana Pay microtransactions.


## Reward Model (Simulation)

Metric	Description	Reward Weight

Node Uptime	Measures how long the node stays active	40%
Charging Sessions	Tracks total number of EV sessions processed	35%
Data Reliability	Accuracy and validity of IoT data	25%


Reward Frequency: Every 24 hours (simulated)
Reward Token: DPN (DePINNest Token)
Distribution: Managed by Solana smart contracts for transparency and fairness.

## Real-World Vision

In the full-scale version, DPN tokens would represent energy credits or network shares, creating a Charge-to-Earn model where:

Station owners earn from each verified charge.

Communities can crowdfund or host local nodes.

Drivers contribute to decentralized clean mobility.


** In essence: DePINNest rewards those who power the network, literally and digitally.
