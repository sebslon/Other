// SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "./Storage.sol";

pragma solidity ^0.8.0;

contract A {
    AppStorage s;

    function setA(uint256 _a) public {
        // AppStorage storage s = Storage.get();
        s.a = _a;
    }

    function getA() public view returns (uint256) {
        return s.a;
    }
}

contract B {
    // uint8 c;
    // uint8 d;
    // uint256 b;
    // address ContractA;
    AppStorage s;

    constructor(address _A) {
        s.ContractA = _A;
        s.b = 4;
        s.c = 0x45;
        s.d = 0xF5;
    }

    function setB(uint256 _b) public {
        s.b = _b;

        s.ContractA.delegatecall(
            abi.encodeWithSignature("setA(uint256)", _b + 1)
        );
    }

    function getB() public view returns (uint256) {
        return s.b;
    }
}
