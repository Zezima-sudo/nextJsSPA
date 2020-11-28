---
title: 'Solidity Yield Farming dApp'
date: '2020-01-01'
---

I built a simple yield farming dApp that utilizes React/Typescript for the front end and Truffle/Solidity for the deployment/compiling of smart contracts. 

To build the app I created two cryptocurrencies: One is **mDai**, a simple stable coin pegged to a dollar, and the other is **Dapp**, a token used to reward our dApp's liquidity farmers. 

A user (on the Ganache testnet) may deposit "mDai" and begin receiving compounding interest paid out in the form of **Dapp* token.

I tested contracts using mocha/chai and used Typescript for enhanced security. 