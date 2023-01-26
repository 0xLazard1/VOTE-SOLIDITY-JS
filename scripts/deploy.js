
const hre = require("hardhat");

async function main() {

  const Election = await hre.ethers.getContractFactory('Election');
  const election = await Election.deploy();



  console.log("Your contract is deployed here", election.address);

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
