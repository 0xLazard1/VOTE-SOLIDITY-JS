//SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Election {
 
   address public owner;
   uint totalVote;

  struct Vote {
      address voteur;
      string Canditat;
  }

  Vote public vote;
  Vote[] public votes;

    constructor() {
        owner = msg.sender;
    }

    function For1() external payable {
        vote = Vote (
            msg.sender,
            "Melenchon"
        );
      votes.push(vote);
      totalVote++;
    }


    function For2() external payable {
        vote = Vote (
            msg.sender,
            "Macron"
        ); 
      votes.push(vote);
      totalVote++;
    }

    function seeVote() external view returns(Vote[] memory){
        return votes;
    }

    function AllVote() external view returns(uint){
        return totalVote;
    }

}