import { Injectable } from '@angular/core';
import { ExternalProvider } from '@ethersproject/providers';
import { BehaviorSubject } from 'rxjs';
import contract from './contract';

declare global {
  interface Window {
    ethereum: ExternalProvider;
  }
}

@Injectable({
  providedIn: 'root'
})
export default class WalletService {

  constructor() { }

  currentAccount = new BehaviorSubject("");
  signature = new BehaviorSubject<string>("");

  async checkIfWalletIsConnected() {
    try {
      const { ethereum } = window;

      if(!ethereum || !ethereum.request) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object");
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        this.setCurrentAccount(account);
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  async connectWallet() {
    try {
      const { ethereum } = window;

      if (!ethereum || !ethereum.request) {
        alert("MetaMask wallet was not detected.  Please install MetaMask and try again.");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      await this.setCurrentAccount(accounts[0])
    } catch (error) {
      console.log(error)
    }
  }

  async setCurrentAccount(account: any) {
    this.currentAccount.next(account);
    await this.checkChain();
  }

  async checkChain() {
    const { ethereum } = window;
    if (!ethereum || !ethereum.request) {
      return;
    }
    let connectedChainId = await ethereum.request({ method: 'eth_chainId' });
    console.log("Connected to chain " + connectedChainId);  
    if (connectedChainId !== contract.chainId) {
      alert("You are not connected to the correct network!");
    }
  }
}