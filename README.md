# Basic app which interacts with the Ethereum blockchain

CRUD - without the D

Spin up a smart contract, deploy it to a local test network and interact with the smart contract by setting, updating and fetching a piece of data (greeting).
Deploy contract to Goerli test network. See contract via `goerli.etherscan.io`.

# Tech Stack

React
Ethers.js
Hardhat
Infura
Goerli network

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy-greeter.js --network localhost
npx hardhat run scripts/deploy-greeter.js --network goerli
```
