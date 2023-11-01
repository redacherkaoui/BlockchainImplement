import { writeBlockchain } from "./blockchain-helpers.js";
const genesisBlock = {
    previousHash: null,
    hash: 0
}

const blockchain = [genesisBlock];



writeBlockchain(blockchain);