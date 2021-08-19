async function main() {
	const [deployer] = await ethers.getSigners()

	console.log('Deploying contracts with the account:', deployer.address)

	const NonToken = await ethers.getContractFactory('NonToken')
	const token = await NonToken.deploy()

	console.log('Token address:', token.address)
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})
