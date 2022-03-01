import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Hero", () => {
  async function createHero() {
    const Hero = await ethers.getContractFactory("TestHero");
    const hero = await Hero.deploy();

    await hero.deployed();

    return hero;
  }

  let hero;

  before(async function () {
    hero = await createHero();
  });

  it("Should get a zero hero array", async () => {
    expect(await hero.getHeroes()).to.deep.equal([]);
  });

  it("Should fail at creating hero cause of payment", async () => {
    let e;

    try {
      await hero.createHero(0, {
        value: ethers.utils.parseEther("0.04999999"),
      });
    } catch (err) {
      e = err;
    }

    expect(e.message.includes("Please send more money :)")).to.equal(true);
  });

  it("Should create a random hero", async () => {
    const hero = await createHero();

    await hero.setRandom(69);
    //@ts-ignore
    await hero.createHero(0, {
      value: ethers.utils.parseEther("0.05"),
    }); // Mage
    const h = (await hero.getHeroes())[0];

    // [S, H, D, I, M]
    // [S, H, D, I]
    expect(await hero.getMagic(h)).to.equal(16);
    expect(await hero.getHealth(h)).to.equal(2);
  });
});

// 26500 - limit is 24k
