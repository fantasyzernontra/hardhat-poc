const { expect } = require('chai')

describe('Non Token Contract', function () {
	it('Deployment should assign the total supply of tokens to the owner', async function () {
		const [owner] = await ethers.getSigners()

		const NonToken = await ethers.getContractFactory('NonToken')

		const hardhatToken = await NonToken.deploy()

		expect(await hardhatToken.getOwner()).to.equal(owner.address)
	})
})
