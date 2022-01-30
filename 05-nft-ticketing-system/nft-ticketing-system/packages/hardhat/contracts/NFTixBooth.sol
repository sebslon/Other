pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

// import "@openzeppelin/contracts/access/Ownable.sol";
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Base64.sol";

contract NFTixBooth is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private currentId;

    bool public saleIsActive = false;
    uint256 public totalTickets = 10;
    uint256 public availableTickets = 10;
    uint256 public mintPrice = 80000000000000000; // GWEI

    mapping(address => uint256[]) public holderTokenIDs;
    mapping(address => bool) public checkIns;

    constructor() ERC721("NFTix", "NFTX") {
        currentId.increment();
    }

    function checkIn(address addy) public {
        checkIns[addy] = true;
        uint256 tokenId = holderTokenIDs[addy][0];

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{ "name": "NFTix #',
                        Strings.toString(tokenId),
                        '", "description": "A NFT-powered ticketing system", ',
                        '"traits": [{ "trait_type": "Checked In", "value": "true" }, { "trait_type": "Purchased", "value": "true" }], ',
                        '"image": "ipfs://<image_link_on_pinata>" }'
                    )
                )
            )
        );

        string memory tokenURI = string(
            abi.encodePacked("data:application.json; base64,", json)
        );
        // --- embedding an image with token metadata [END]

        _setTokenURI(currentId.current(), tokenURI); // Apply image to the token
    }

    function mint() public payable {
        require(availableTickets > 0, "Not enough tickets.");
        require(msg.value >= mintPrice, "Not enough ETH!");
        require(saleIsActive, "Tickets are not on sale!");

        // --- embedding an image with token metadata [START]
        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{ "name": "NFTix #',
                        Strings.toString(currentId.current()),
                        '", "description": "A NFT-powered ticketing system", ',
                        '"traits": [{ "trait_type": "Checked In", "value": "false" }, { "trait_type": "Purchased", "value": "true" }], ',
                        '"image": "ipfs://<image_link_on_pinata>" }'
                    )
                )
            )
        );

        string memory tokenURI = string(
            abi.encodePacked("data:application.json; base64,", json)
        );
        // --- embedding an image with token metadata [END]

        _safeMint(msg.sender, currentId.current());
        _setTokenURI(currentId.current(), tokenURI); // Apply image to the token

        currentId.increment();
        availableTickets = availableTickets - 1;
    }

    function availableTicketsCount() public view returns (uint256) {
        return availableTickets;
    }

    function totalTicketCount() public view returns (uint256) {
        return totalTickets;
    }

    function openSale() public onlyOwner {
        saleIsActive = true;
    }

    function closeSale() public onlyOwner {
        saleIsActive = false;
    }

    function confirmOwnership(address addy) public view returns (bool) {
        return holderTokenIDs[addy].length > 0;
    }
}
