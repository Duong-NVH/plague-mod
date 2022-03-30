const { ethers, upgrades } = require("hardhat");

const PROXY_ADDRESS = "0xa95974910b55407D166A033173C42B4C539221a4";

async function main() {
  console.log("-----Upgrading-----")

  const Achilles = await ethers.getContractFactory("Achilles");
  await ethers.forceImport(PROXY_ADDRESS,Achilles);


  const AchillesMint = await ethers.getContractFactory("AchillesMint");
  const aMint = await upgrades.upgradeProxy(PROXY_ADDRESS, AchillesMint);
  await aMint.deployed();
  console.log("-----Upgraded-----");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});

