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


