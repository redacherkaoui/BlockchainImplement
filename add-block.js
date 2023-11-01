import { getBlockchain, writeBlockchain, getTransactions, writeTransactions } from "./blockchain-helpers.js";

const blockchain = getBlockchain();



const previousBlock = blockchain[blockchain.length - 1];
const transactions = getTransactions();
const newBlock = {
    previousHash: previousBlock.hash,
    hash: Math.random().toString(),
    transactions

};

blockchain.push(newBlock);


writeBlockchain(blockchain);
