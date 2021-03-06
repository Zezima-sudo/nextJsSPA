---
title: "EthSwap: an Ethereum DApp for Swapping ETH for ERC-20 and Vice Versa"
date: '2021-01-13'
---

<img src="https://camo.githubusercontent.com/6e7aae49f338cf80a4a33b5e3cffea708c2998199dc37422d91e73f98abf7743/68747470733a2f2f692e696d6775722e636f6d2f647570715a794e2e676966">

<a href="https://swapeth.vercel.app/">EthSwap Deployment</a>

<a href="https://github.com/zezimaSudo/EthSwap">Github</a>

<h3>Nine months ago I hadn't written a single line of code.</h3>

My fascination with blockchain technology is hands-down what pushed me over the edge to finally start coding. Since 2016, I've been what the industry would probably consider a "super user". I was among the first wave of people using Defi technology, stumbling upon EtherDelta in early 2016, using various decentralized technologies every day. I remember buying my first Ethereum on break at one of my old jobs in 2016 so that I could buy an altcoin I was eyeing. I felt so cool going on Bitfinex, purchasing ETH and sending it to EtherDelta to swap for the ERC-20; something felt so good about how I had such command over my money, moving it from a CEX located in China to an exchange that existed purely in the ether, <em>no pun intended</em>, held together by node operators from all across the world. Eventually I transitioned to strictly US exchanges, utilizing Coinbase Pro which was at that time named GDAX, to make my large-volume trades. It was the obvious choice for the fee discounts one benefited from, and the clean UI/UX. I probably did over $1.5MM - $2MM in volume in 2017 on there. What a year it was.

For foolish reasons it took me until recently to take the leap into becoming a software developer. I used to believe that if you hadn't started coding from a young age that it was too late, that you had missed the boat. I couldn't have been more wrong: while the journey from console logging my first 'hello world' to now has been one ripe with frustration, doubt, and humiliation--I feel so good about what I've accomplished in this short time. Though the story's only just begun and I have much, much, <em>much</em> more to learn, I'm fully confident in saying this is what I want to do, and that I've made the correct decision. Working with the Ethereum blockchain and building out UIs that invoke smart contract calls is nothing short of fascinating for me. I've been a die hard musician from the age of 13 and have always considered that to be first and foremost my identity, but now I happily call myself a full stack blockchain developer and feel completely happy in doing so. I am so excited to continue learning and improving.

<h2>The DApp:</h2>

My goal in building this out was to create a very simple, easy to use interface that would enable one to swap their ETH for ERC-20 tokens, much like my naive self in 2016, except without nearly as much hassle. I utilized **React** for front end, **Solidity** and **Truffle** for contract development, and tested with **Mocha/Chai**. Security was a big concern of mine in building EthSwap because no matter how pretty I made the front end look, if a user lost funds (even testnet ETH!), it would destroy any good impression I was trying to leave on the user, so I made sure my tests were robust and thorough. Once everything was solid on the contract side, I did my best to create a clean and simple retro-styled design. Everything is deployed to the Rinkeby testnet so, grab yourself some test-net ETH and try it out for yourself!