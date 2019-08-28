# Transaction-Tracker



## Important Links:

GitHub Repository Link : https://github.com/muskaankalra24/Transaction_Tracker


## Introduction 


The solution set of REST api on top of Ethereum blockchain to server transaction details and account
changes
1. [API for account transfer]
`http://localhost:3000/contracttxhash/0x8369f386898e6a9468f46f5a0eb5975bde43f95db9e141bab4e211c81e4da097`You can change transaction hash according to you.

2. [API for ERC-20 Token Transfer]
`http://localhost:3000/erc20?event=Transfer&contractAddress=0xb83f51d37befcb16849ad5a18330bb006b700871&address=0x599de121edb2821dad8caa500dc9db4d9661e521`
 This API will work for all ERC-20 token compatible contract. Change contract address according to you and if you want to list all the events remove event=transfer from API.
Address in API is sender's address. You can change or remove it according to you.


3. [API for Contract execution]
`http://localhost:3000/txhash/0xa2c271ce15a905d0229e427ee65eeef2f211c74a0a37b6071898619a02f977d6`.You can change transaction hash 

You can use these APIs for testing.

Technologies used:
-----------------------------
  - Nodejs
  - Web3.js(Library)
  - Express(Framework)
 

  
## Installation Instructions
-----------------------------
  1. clone the project
  `https://github.com/muskaankalra24/Transaction_Tracker.git`
  2. Start the server `npm start` 
 

