const { ethers, upgrades } = require("hardhat");

const PROXY_ADDRESS = "0xa95974910b55407D166A033173C42B4C539221a4";

async function main() {
  const AchillesMint = await ethers.getContractFactory("AchillesMint");
  const aMint = await upgrades.upgradeProxy(PROXY_ADDRESS, AchillesMint);
  console.log("Upgraded");
}

main();
