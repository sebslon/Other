// SPDX-License-Identifier: MIT

import "hardhat/console.sol";

pragma solidity ^0.8.0;

struct AppStorage {
    uint256 a;
    uint256 b;
    uint8 c;
    uint8 d;
    address ContractA;
}

// around storage issues

library Storage {
    bytes32 KEY = keccak256("my-storage-location");

    function get() internal pure returns (AppStorage storage s) {
      bytes32 k = KEY;

      assembly {
        s.slot = k; // Get around OPEN zeppelin erc721 impl
      }
    }
}
