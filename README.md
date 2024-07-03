# Chai Contract

================

## Description

Chai is a simple Ethereum contract that allows users to buy a virtual cup of chai by sending Ether to the contract. Each purchase is recorded as a memo, which includes the buyer's name, message, timestamp, and address.

## Contract Functions

### `buyChai(string memory name, string memory message)`

- Allows users to buy a virtual cup of chai by sending Ether to the contract.
- Requires a non-zero Ether payment.
- Transfers the payment to the contract owner.
- Creates a new memo with the buyer's name, message, timestamp, and address.

### `getMemos()`

- Returns an array of all memos recorded on the contract.

## Frontend

The Chai contract is accompanied by a Netlify frontend that allows users to interact with the contract. The frontend provides a simple interface for users to input their name and message, and then send Ether to the contract to purchase a virtual cup of chai.

## Setting up the Project

### Hardhat Setup

To set up the Hardhat project, run the following commands:

Installation

```
npm install
```

Compile

```
npx hardhat compile
```

### Deployment

1. Replace .env.example with .env and replace

   - SEPOLIA_URL=
   - PRIVATE_KEY=
   - ETHERSCAN_API=

2. To deploy and test functions

```sh
npx hardhat run scripts/deploy.js --netowrk NETWORK
```

Replace NETWORK valide network of your choice (ex: sepolia or base-sepolia)

3. To deploy and verify

```sh
npx hardhat run scripts/finalDeploy.js --netowrk NETWORK
```

Replace NETWORK valide network of your choice (ex: sepolia or base-sepolia)

### React Setup

To set up the React frontend, run the following commands:

```
cd client
```

```
npm start
```

## Deployment

The Chai contract is deployed on the Sepolia. The contract address is [0x0482ee1b33857d3B674535710bF53656c1cDf3Ee](https://sepolia.etherscan.io/address/0x0482ee1b33857d3B674535710bF53656c1cDf3Ee).

## Live Demo

[Visit the live demo on Netlify](https://demo-chai.netlify.app/)
