require("@nomiclabs/hardhat-waffle");
const fs = require('fs');

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: "https://rpc-mumbai.matic.today",
      chainId: 80001,
      accounts: ['d0d7a99c301b6a5dc0411e6089b85cd0334a4a6f8359c8fe6db690a97220cde3']
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

