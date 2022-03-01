// SPDX-License-Identifier: MIT

import "hardhat/console.sol";

pragma solidity ^0.8.0;

interface IFallback {
    function count() external;
}

contract Fallback {
    function foo() internal view {
        console.log("Hello World");
    }

    fallback() external payable {
        foo();
        console.log("fallback");

        revert("You shouldn't be here");
    }
}

// Fallback can be used to look up functions
// These functions exists in separate contracts
// We can delegate call out to that contract so we use our own storage
// https://github.com/mudgen/diamond-3-hardhat
