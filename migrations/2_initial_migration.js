const Lemmy_register = artifacts.require("lemmy_register");
module.exports = function (deployer) {
  deployer.deploy(Lemmy_register);
};
