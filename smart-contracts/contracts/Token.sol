// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.7;

contract NonToken {
    string public name = "Non Token";
    string public symbol = "NT";

    uint256 public totalSupply = 1000000;

    address public owner;

    mapping(address => uint256) usersBalances;

    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;

        usersBalances[msg.sender] = totalSupply;
        owner = msg.sender;
    }
}
