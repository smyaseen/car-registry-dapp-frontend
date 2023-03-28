const { expect } = require("chai");

describe("CarRegistry Tests", function () {
  describe("add car detail", function () {
    it("add car", async function () {
      const [account1, account2, account3] = await ethers.getSigners();
      const CarRegistry = await ethers.getContractFactory("CarRegistry");

      const contract = await CarRegistry.deploy();
      await contract.deployed();
      await contract.addCarByCarNumber("corolla", 123);

      expect(await contract.getCarByCarNumber(123)).to.be.equal([
        "corolla",
        123,
        account1,
      ]);
    });
  });
});
