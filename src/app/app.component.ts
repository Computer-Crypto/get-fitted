import { Component } from '@angular/core';
import WalletService from './wallet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'get-fitted';
  currentAccount!: string;

  constructor(private walletService: WalletService) {
    this.walletService.currentAccount.subscribe(account => {
      this.currentAccount = account;
    });
    this.walletService.checkIfWalletIsConnected();
  }

  async connectWallet() {
    if(!this.currentAccount) {
      await this.walletService.connectWallet();
    }
  }
}
