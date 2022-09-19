require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const API_KEY_URL = process.env.API_KEY_URL;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: API_KEY_URL,
      accounts: [PRIVATE_KEY],
    },
    bsctestnet: {
      url: API_KEY_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};