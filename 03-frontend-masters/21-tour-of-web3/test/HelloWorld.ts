import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Hello world", () => {
  it("Should return hello world", async () => {
    // 1. setup environment (hardhat, etc.);

    // 2. deploy our contract
    const HelloWorld = await ethers.getContractFactory("HelloWorld"); // name of the contract
    const hello = await HelloWorld.deploy();

    await hello.deployed();

    // 3. call our functions to test
    expect(await hello.hello()).to.equal("Hello, World");
  });
});
