import 'hhxport'
import { config } from "dotenv";
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

config()

export default <HardhatUserConfig> {
  solidity: {
    version: "0.4.24", settings: {
      optimizer: { enabled: true, runs: 200 },
    },
  },
  networks: {
    hardhat: {
      blockGasLimit: 10000000,
    }
  }
};
