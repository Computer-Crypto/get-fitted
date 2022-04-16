import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExternalProvider } from '@ethersproject/providers';
import { base64 } from 'ethers/lib/utils';
import { map, Observable, of, Subject } from 'rxjs';
import contract from '../contract';
import { Collection } from './base-collection';
import { FitGroup } from './fit';

declare global {
  interface Window {
    ethereum: ExternalProvider;
  }
}

export class AlienPunkThings extends Collection { 
  constructor(http: HttpClient) {
    super(
      http,
      "alien-punk-things",
      "Alien Punk Things",
      "0x5b98ab35514c1c91f33ba12e0778d53e1ebdb106",
      "/assets/collections/alien-punk-things/logo.png",
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
        },{
          name: "Blue Shirt",
          variants: [{
            name: "Blue Shirt",
            url: "/assets/collections/alien-punk-things/fits/shirts/shirt.png"
          },{
            name: "Blue Shirt w/ APT Logo",
            url: "/assets/collections/alien-punk-things/fits/shirts/apt_shirt.png"
          }]
        }]
      }]
    );
  }
  
  getTokenImageUrl(tokenId: number): string {
    return `https://alienpunkthingsprod.blob.core.windows.net/images/${tokenId}.png`;
  }

  getCollectionSize(): number {
    return 8888;
  }
}
