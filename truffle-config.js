module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      gasPrice: 0,
      gas: 4500000,
      type: "quorum"
    },
  },
  compilers: {
    solc: {
      version: "^0.4.18" // replace w/ the solc version you need
    }
  }
};
