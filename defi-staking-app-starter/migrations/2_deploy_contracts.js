//const Token = artifacts.require('Token');
const Tether = artifacts.require('Tether');
const RWD = artifacts.require('RWD');
const DecentralBank = artifacts.require('DecentralBank');

module.exports = async function(deployer, network, accounts){
    await deployer.deploy(Tether);
    const tether = await Tether.deployed();

    await deployer.deploy(RWD);
    const rwd = await RWD.deployed();

    await deployer.deploy(DecentralBank, rwd.address, tether.address);
    const decentralBank = await DecentralBank.deployed();

    //console.debug("decentralBank.address::", decentralBank.address)
    await rwd.transfer(decentralBank.address, web3.utils.toWei('40', 'ether'));
    await tether.transfer(accounts[1], web3.utils.toWei('60', 'ether'));
}