import React, { Component } from 'react'
import Web3 from 'web3'

import logo from './logo.svg'
import './App.css'

const fs = require ('fs');
const Eth = require('ethjs');
const eth = new Eth(new Eth.HttpProvider('https://ropsten.infura.io/SYGRk61NUc3yN4NNRs60'));

class App extends Component {
  constructor(props, context){  // does context actually work this way?
      super(props)
      this.state = {
        //web3Context: context.web3
      }

      var crowdsaleAddress = "0x9f5a27e6d2323196e195743f28fbe817988dfdef"  // Ropsten address
      var tokenAddress = "0x5bc2d3b62f3546e1ac3b34ef0d956d5df7fc64be"    // Ropsten

      var crowdsaleABIFile = "SelfKeyCrowdsale.json"
      var crowdsaleSpecs = JSON.parse(fs.readFileSync("../build/contracts/" + crowdsaleABIFile))
      var crowdsaleABI = crowdsaleSpecs.abi
      var CrowdSaleContract = eth.contract(crowdsaleABI)
      var crowdsaleInstance = CrowdSaleContract.at(crowdsaleAddress)

      var tokenABIFile = "SelfKeyToken.json";
      var tokenSpecs = JSON.parse(fs.readFileSync("../build/contracts/" + tokenABIFile));
      var tokenABI = tokenSpecs.abi;
      var TokenContract = eth.contract(tokenABI);
      var tokenInstance = TokenContract.at(tokenAddress);
   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SelfKey Crowdsale Frontend</h1>
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
