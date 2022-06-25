// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title A simple register contract
contract Lemmy_register {
    uint256 public max = 1000;
    uint256 public registred_count;
    mapping(address => bool) public isRegistred;

    /// @dev Adds caller address into the register
    function register_address() public {
        require(
            bool(isRegistred[msg.sender]) == false,
            "Address is already registred"
        );
        require(
            uint256(registred_count) < uint256(max),
            "Register max is already reached"
        );
        registred_count += 1;
        isRegistred[msg.sender] = true;
    }
}
