const { ethers } = require("hardhat");

async function main() { 

    const [deployer] = await  ethers.getSigners();
    const  Token = await ethers.getContractFactory("Upload");

    const token = await Token.deploy();

    console.log(" Sc Address " , token.address);
}

main().then(() => process.exit(0)).catch((error) => { 

    console.log(error);
    process.exit(1)
})