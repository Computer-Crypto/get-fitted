import { HttpClient } from '@angular/common/http';
import { ExternalProvider } from '@ethersproject/providers';
import { Collection } from './base-collection';

declare global {
  interface Window {
    ethereum: ExternalProvider;
  }
}

export class Mfers extends Collection { 
  constructor(http: HttpClient) {
    super(
      http,
      "mfers",
      "mfers",
      "0x79fcdef22feed20eddacbb2587640e45491b757f",
      "/assets/collections/mfers/logo.png",
      [{
        name: "Head",
        order: 1,
        fits: [{
          name: "420 Headphones",
          variants: [{
            name: "420 Headphones",
            url: "/assets/collections/mfers/fits/head/420-headphones.png"
          }]
        },{
            name: "Cap",
            variants: [{
              name: "Cap",
              url: "/assets/collections/mfers/fits/head/cap.png"
            }]
          },{
            name: "Cowboy Hat",
            variants: [{
              name: "Cowboy Hat",
              url: "/assets/collections/mfers/fits/head/cowboy-hat.png"
            }]
          },{
            name: "Drinks Hat",
            variants: [{
              name: "Drinks Hat",
              url: "/assets/collections/mfers/fits/head/drinks-hat.png"
            }]
          },{
            name: "Baseball Hat",
            variants: [{
              name: "Alien Punk Things",
              url: "/assets/collections/mfers/fits/head/hat-apt.png"
            },{
                name: "Bimah",
                url: "/assets/collections/mfers/fits/head/hat-bimah.png"
            },{
            name: "Crypto Celestials (CCSC)",
            url: "/assets/collections/mfers/fits/head/hat-ccsc.png"
            }]
          },{
            name: "Karate Headband",
            variants: [{
              name: "Karate Headband",
              url: "/assets/collections/mfers/fits/head/karate-headband.png"
            }]
          },{
            name: "Beanie",
            variants: [{
              name: "Beanie",
              url: "/assets/collections/mfers/fits/head/beanie.png"
            }]
          },{
            name: "Gas Mask",
            variants: [{
              name: "Gas Mask",
              url: "/assets/collections/mfers/fits/head/gas-mask.png"
            }]
          }]
      },{
        name: "Accessories",
        order: 1,
        fits: [{
          name: "Bong",
          variants: [{
            name: "Bong",
            url: "/assets/collections/mfers/fits/accessories/bong.png"
          }]
        }]
    }]) 
  }
  
  getTokenImageUrl(tokenId: number): string {
    return `https://nftoutfits.blob.core.windows.net/mfers/${tokenId}.png`;
  }

  getSmallTokenImageUrl(tokenId: number): string {
    return `https://nftoutfits.blob.core.windows.net/mfers/small/${tokenId}.png`;
  }

  getCollectionSize(): number {
    return 10021;
  }
}
