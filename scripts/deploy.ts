import { ethers } from "hardhat"

async function main() {
  const options = {
    saturnToken: '0xAC55641Cbb734bdf6510d1bBd62E240c2409040f',
    treasury: '0x0',
    feeMul: '1', feeDiv: '400',
    tradeMiningMul: '1', tradeMiningDiv: '40000'
  }

  const Exchange = await ethers.getContractFactory("Exchange");

  const exchange = await Exchange.deploy(
    options.saturnToken, options.treasury,
    options.feeMul, options.feeDiv,
    options.tradeMiningMul, options.tradeMiningDiv
  );

  await exchange.deployed();

  console.log("Exchange deployed to:", exchange.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
