const { ethers } = require("hardhat");
const { expect } = require("chai");


describe("Election Contract", function () {

    beforeEach(async function () {
        [this.owner, this.addr1, this.addr2] = await ethers.getSigners();

        const Election = await ethers.getContractFactory('Election', this.owner);
        this.electiondeployed = await Election.deploy();
    });

    describe("Owner", function () {
        it("Should that Owner will be equal owner", async function () {
            expect(await this.electiondeployed.owner()).to.equal(this.owner.address)
        })
    })


})