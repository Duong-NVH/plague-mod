
const { ethers, upgrades } = require("hardhat");


async function main() {
  const TokenContract = await ethers.getContractFactory("XFinance");
  const token = await upgrades.deployProxy(TokenContract, []);
  await token.deployed();

  console.log("token deployed to:", token.address);

  const Distributor = await ethers.getContractFactory(
    "DividendDistributorUpgradeable"
  );
  const dis = await upgrades.deployProxy(Distributor, []);
  await dis.deployed();

  console.log("distributor deployed to:", dis.address);

  console.log("Setting token")

  await token.setDistributor(dis.address);

  console.log("Setting distributor")

  await dis.setTokenAddress(token.address);

  console.log("done")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
