import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExternalProvider } from '@ethersproject/providers';
import { base64 } from 'ethers/lib/utils';
import { Observable, of, Subject } from 'rxjs';
import contract from '../contract';
import { Collection } from './base-collection';
import { FitGroup } from './fit';

declare global {
  interface Window {
    ethereum: ExternalProvider;
  }
}

export class AlienPunkThings extends Collection { 
  constructor(private http: HttpClient) {
    super(
      "alien-punk-things",
      "Alien Punk Things",
      "/assets/collections/alien-punk-things/logo.png",
      "https://alienpunkthingsprod.blob.core.windows.net/images/",
      [{
        name: "Hat",
        fits: [{
          name: "Cowboy Hat",
          variants: [{
            name: "Cowboy Hat",
            url: "/assets/collections/alien-punk-things/fits/hats/cowboy-hat.png"
          }]
        },{
          name: "Beanie",
          variants: [{
            name: "Beanie",
            url: "/assets/collections/alien-punk-things/fits/hats/beanie.png"
          }]
        },{
          name: "Cap",
          variants: [{
            name: "Cap",
            url: "/assets/collections/alien-punk-things/fits/hats/cap.png"
          }]
        },{
          name: "Drinks Hat",
          variants: [{
            name: "Drink Hat",
            url: "/assets/collections/alien-punk-things/fits/hats/drink-hat.png"
          }]
        }]
      }, {
        name: "Shirt",
        fits: [{
          name: "Pink Suit",
          variants: [{
            name: "Pink Suit",
            url: "/assets/collections/alien-punk-things/fits/shirts/pink-suit.png"
          }]
        },{
          name: "Shirt with Collar",
          variants: [{
            name: "Shirt with Collar",
            url: "/assets/collections/alien-punk-things/fits/shirts/shirt-with-collar.png"
          }]
        },{
          name: "Blue Collar Shirt",
          variants: [{
            name: "Blue Collar Shirt",
            url: "/assets/collections/alien-punk-things/fits/shirts/blue-collar-shirt.png"
          }]
        },{
          name: "Hoodie",
          variants: [{
            name:"Green",
            url:"/assets/collections/alien-punk-things/fits/shirts/apt-hoodie/green.png"
          },{
            name:"Blue",
            url:"/assets/collections/alien-punk-things/fits/shirts/apt-hoodie/blue.png"
          },{
            name:"Pink",
            url:"/assets/collections/alien-punk-things/fits/shirts/apt-hoodie/pink.png"
          },{
            name:"Purple",
            url:"/assets/collections/alien-punk-things/fits/shirts/apt-hoodie/purple.png"
          },{
            name:"Red",
            url:"/assets/collections/alien-punk-things/fits/shirts/apt-hoodie/red.png"
          }]
        }]
      }]
    );
  }
  
  getTokenImageUrl(tokenId: number): string {
    return `https://alienpunkthingsprod.blob.core.windows.net/images/${tokenId}.png`;
  }
  getTokensForWallet(address: string): Observable<string[]> {
    return this.http.get<string[]>(`${contract.apiUrl}/api/get-by-owner?address=${address}`);
  }
  getCollectionSize(): number {
    return 8888;
  }
}
