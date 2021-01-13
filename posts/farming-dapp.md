---
title: 'Ethereum Yield Farming DApp'
date: '2020-11-01'
---


I built a simple <a href="https://defi-dapp-farm.vercel.app/">yield farming dApp</a> that utilizes **React/Typescript** for the front end and **Truffle/Solidity** for the development and deployment/compiling of smart contracts. <a href="https://github.com/zezimaSudo/defi-dapp-farm">Github</a>

To build the app I created two cryptocurrencies: One is **mDai**, a simple stable coin pegged to a dollar, and the other is **Dapp**, a token used to reward our dApp's liquidity farmers. 

A user (on the Ganache testnet) may deposit **mDai** and begin receiving compounding interest paid out in the form of **Dapp Token.** 

I tested contracts using mocha/chai and used Typescript for enhanced security. 

<img src="https://camo.githubusercontent.com/cb761cb389967c147a6ad8e6d7936bd4d86734d9a2e4221dda5439454b8a45d9/68747470733a2f2f692e696d6775722e636f6d2f7974694a5377722e676966" />