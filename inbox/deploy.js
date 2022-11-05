const fs = require("fs");
const ethers = require("ethers");

async function main() {
  const providers = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );
  const wallet = new ethers.Wallet(
    "509a843dee11bb5d63371e24b1f9458ace7b8ced0bc8f61a239233c50b0c41be",
    providers
  );
  const abi = fs.readFileSync(
    "./contracts_SimpleStorage_sol_SimpleStorage.abi",
    "utf8"
  );
  const binary = fs.readFileSync(
    "./contracts_SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait !");
  const contract = await contractFactory.deploy();
  console.log({ contract });
}

main();
