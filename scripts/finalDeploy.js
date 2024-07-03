const hre = require("hardhat");

async function main() {
  /* const chai = await hre.ethers.getContractFactory("chai");
  const contract = await chai.deploy(); //instance of contract

  await contract.waitForDeployment();
  console.log("Address of contract:", contract.target);
  const contractAddress = contract.target;
   */ //await contract.deploymentTransaction(6);
  await customVerify("0x0482ee1b33857d3B674535710bF53656c1cDf3Ee", []);
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function customVerify(assetRegistryaddress, args) {
  console.log("Verifying...");
  await sleep(120 * 1000);
  try {
    await run("verify:verify", {
      address: assetRegistryaddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified");
    } else {
      console.log(e);
    }
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
