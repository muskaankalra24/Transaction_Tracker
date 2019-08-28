var express = require('express');
var router = express.Router();
var Web3 = require('web3');
var web3 = new Web3();
var provider = new Web3.providers.WebsocketProvider("wss://ropsten.infura.io/ws")
web3.setProvider(provider);
var ABI = require('../ERC20')


/* GET home page. */
router.get('/txhash/:txhash', function (req, res, next) {
  web3.eth.getTransactionReceipt(req.params.txhash)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error))
});
//http://localhost:3000/contracttxhash/0x8369f386898e6a9468f46f5a0eb5975bde43f95db9e141bab4e211c81e4da097

router.get('/erc20', async function (req, res, next) {
  console.log(req.query);
  const registryContract = new web3.eth.Contract(ABI, req.query.contractAddress);
  registryContract.getPastEvents(req.query.event, {
    filter: { _from: req.query.address },
    fromBlock: 0,
    toBlock: 'latest'
  }, function (error, events) { console.log(events); })
    .then(function (events) {
      console.log(events)
      res.status(200).send({events:events})
    });
});

//   use this link to test http://localhost:3000/erc20?event=Transfer&contractAddress=0xb83f51d37befcb16849ad5a18330bb006b700871&address=0x599de121edb2821dad8caa500dc9db4d9661e521
// if you remove event=Transfer you will get all the events related to this contract

router.get('/contracttxhash/:txhash', function (req, res, next) {
  web3.eth.getTransactionReceipt(req.params.txhash)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error))
});
// http://localhost:3000/contracttxhash/0xa2c271ce15a905d0229e427ee65eeef2f211c74a0a37b6071898619a02f977d6
module.exports = router;


// 