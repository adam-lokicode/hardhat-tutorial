import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-ignition-ethers";
import 'catapulta/hardhat';
import 'hardhat-deploy';

require("@nomicfoundation/hardhat-toolbox");

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
const INFURA_API_KEY = "5e87273b19c24809abed377c3a41ecc0";

const SEPOLIA_PRIVATE_KEY = "0x99d9d46cd11b182be921d0430bb33101c7e2e0f2cdf1c0772af11d3a81716664";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
};

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: "ZWRCWYQDIYJ8JZ1SYASA21HGS2P1RDT6EV",
  },
};

export default {
  config
};
