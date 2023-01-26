import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import Artifats from "./artifacts/contracts/Vote.sol/Election.json";
import "./App.css";

function App() {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [votes, setVotes] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (contract) {
      getVotes();
    }
    return () => {
      setVotes([]);
      setProvider(null);
    }
  }, [contract]);

  async function connect() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);

    const contract = new ethers.Contract(
      "0x9A676e781A523b5d0C0e43731313A708CB607508",
      Artifats.abi,
      provider.getSigner()
    );
    setContract(contract);
    setIsConnected(!isConnected);
  }

  async function voteFor1() {
    await contract.For1();
  }

  async function voteFor2() {
    await contract.For2();
  }

  async function getVotes() {
    const votes = await contract.seeVote();
    setVotes(votes);
  }

  return (
    <section>
      <div className="container">
        <div className="block left">
          <button onClick={connect}>
            {isConnected ? "Disconnect" : "Connect"}
          </button>
          <button onClick={voteFor1}>Vote for 1</button>
          <button onClick={voteFor2}>Vote for 2</button>
        </div>
        <div className="block right">
          {votes.map((vote, index) => (
            <div key={index}>
              Voter: {vote.voteur} Candidat: {vote.Canditat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
