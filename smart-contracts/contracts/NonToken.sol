// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.7;

import "./libs/BEP20.sol";

contract NonToken is BEP20 {
    address private _operator;

    constructor() public BEP20("Non Token", "NT") {
        _operator = msg.sender;
    }
}
