var RelayHub = artifacts.require("./RelayHub.sol");
var SampleRecipient = artifacts.require("./SampleRecipient.sol");

module.exports = async function(deployer) {
    await deployer.deploy(RelayHub);
    let sr = await deployer.deploy(SampleRecipient);
    await sr.setHub(RelayHub.address)
};
