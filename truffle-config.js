const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "mnemonic";

module.exports = {
  networks: {
    rinkeby: {
      networkCheckTimeout: 1000000,
      timeoutBlocks: 50000,
      provider: function() {
        return new HDWalletProvider(mnemonic, "provider")
      },
      network_id: 4 
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
};
