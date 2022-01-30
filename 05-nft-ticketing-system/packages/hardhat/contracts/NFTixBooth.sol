pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

// import "@openzeppelin/contracts/access/Ownable.sol";
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFTixBooth is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private currentId;

    bool public saleIsActive = false;
    uint256 public totalTickets = 10;
    uint256 public availableTickets = 10;

    mapping(address => uint256[]) public holderTokenIDs;

    constructor() ERC721("NFTix", "NFTX") {
        currentId.increment();
    }

    function mint() public {
        require(availableTickets > 0, "Not enough tickets.");
        _safeMint(msg.sender, currentId.current());

        currentId.increment();
        availableTickets = availableTickets - 1;
    }

    function availableTicketsCount() public view returns (uint256) {
        return availableTickets;
    }

    function totalTicketCount() public view returns (uint256) {
        return totalTickets;
    }

    function openSale() public {
        saleIsActive = true;
    }

    function closeSale() public {
        saleIsActive = false;
    }
}
