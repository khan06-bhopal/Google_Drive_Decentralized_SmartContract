require("@nomiclabs/hardhat-waffle");

const ALCHEMY_API_KEY = "fQhmWbR9jqkYAq8hsa5WrAR6VnDEGtYr";
const PRIVATE_KEY = "f613e86fb97e89efefaf37a965050e1128ead4988ab425bc658a4c74b7731014";

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};
