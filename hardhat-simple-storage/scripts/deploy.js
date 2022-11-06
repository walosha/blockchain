const { ethers } = require("hardhat")

async function main() {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage")
    const [deployer] = await ethers.getSigners()

    const simpleStorage = await SimpleStorage.deploy()
    await simpleStorage.deployed()

    console.log(`SimpleStorage is being deployed to ${simpleStorage.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
