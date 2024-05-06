require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    chainstack: {
      url: "https://ethereum-sepolia.core.chainstack.com/a5xxxxxxxxxxxxxxxxxxxxxxxa32", // Replace with your Chainstack node endpoint
      accounts: ["2c5xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxc456"], // Your private key
    },
  },
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test",
  },
};
