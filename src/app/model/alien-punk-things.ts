import { HttpClient } from '@angular/common/http';
import { ExternalProvider } from '@ethersproject/providers';
import { Collection } from './base-collection';

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
        name: "Hair",
        order: 0,
        fits: [{
          name: "Fire Hair",
          variants: [{
            name: "Fire Hair",
            url: "/assets/collections/alien-punk-things/fits/hats/fire-hair.png"
          }]
        },{
          name: "Mullet",
          variants: [{
            name: "Mullet",
            url: "/assets/collections/alien-punk-things/fits/hats/mullet.png"
          }]
        },{
          name: "Rat Tail",
          variants: [{
            name: "Rat Tail",
            url: "/assets/collections/alien-punk-things/fits/hats/rat-tail.png"
          }]
        }]
      },{
        name: "Hat",
        order: 1,
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
        },{
          name: "Karate Headband",
          variants: [{
            name: "Karate Headband",
            url: "/assets/collections/alien-punk-things/fits/hats/karate-headband.png"
          }]
        },{
          name: "Leaf Mask",
          variants: [{
            name: "Leaf Mask",
            url: "/assets/collections/alien-punk-things/fits/hats/leaf-mask.png"
          }]
        },{
          name: "Bong Mask",
          variants: [{
            name: "Bong Mask",
            url: "/assets/collections/alien-punk-things/fits/hats/bong-mask.png"
          }]
        },{
          name: "Nardwaur",
          variants: [{
            name: "Nardwaur",
            url: "/assets/collections/alien-punk-things/fits/hats/nardwaur.png"
          }]
        },{
          name: "Raiders Hat",
          variants: [{
            name: "Raiders Hat",
            url: "/assets/collections/alien-punk-things/fits/hats/raiders-hat.png"
          }]
        },{
          name: "ICP",
          variants: [{
            name: "ICP",
            url: "/assets/collections/alien-punk-things/fits/hats/icp.png"
          }]
        },{
          name: "MF Doom Mask",
          variants: [{
            name: "MF Doom Mask",
            url: "/assets/collections/alien-punk-things/fits/hats/mf-doom-mask.png"
          }]
        }]
      }, {
        name: "Shirt",
        order: 0,
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
            name: "With APT Patch",
            url: "/assets/collections/alien-punk-things/fits/shirts/apt_shirt.png"
          },{
            name: "Without APT Patch",
            url: "/assets/collections/alien-punk-things/fits/shirts/shirt.png"
          },]
        },{
          name: "Raptor Jacket",
          variants: [{
            name: "Raptor Jacket",
            url: "/assets/collections/alien-punk-things/fits/shirts/raptor-jacket.png"
          }]
        },{
          name: "Gi",
          variants: [{
            name: "Gi",
            url: "/assets/collections/alien-punk-things/fits/shirts/gi.png"
          }]
        },{
          name: "420 Cosplay",
          variants: [{
            name: "420 Cosplay",
            url: "/assets/collections/alien-punk-things/fits/shirts/420-cosplay.png"
          }]
        },{
          name: "NWA Jacket",
          variants: [{
            name: "NWA Jacket",
            url: "/assets/collections/alien-punk-things/fits/shirts/nwa-jacket.png"
          }]
        }]
      }, {
        name: "Accessories",
        order: 3,
        fits: [{
          name: "Smoking",
          variants: [{
            name: "Bong with smoke",
            url: "/assets/collections/alien-punk-things/fits/accessories/smoking/bong1.png"
          },{
            name: "Bong with smoke screen",
            url: "/assets/collections/alien-punk-things/fits/accessories/smoking/bong3.png"
          },{
            name: "Bong with arms",
            url: "/assets/collections/alien-punk-things/fits/accessories/smoking/bong4.png"
          },{
            name: "Joint",
            url: "/assets/collections/alien-punk-things/fits/accessories/smoking/joint.png"
          },{
            name: "Smoke",
            url: "/assets/collections/alien-punk-things/fits/accessories/smoking/smoke.png"
          }]
        }]
      },
      {
        name: "Eyes",
        order: 0,
        fits: [{
          name: "Stoner",
          variants: [{
            name: "Blood Shot",
            url: "/assets/collections/alien-punk-things/fits/eyes/stoner/regular.png"
          },{
            name: "Cyclops",
            url: "/assets/collections/alien-punk-things/fits/eyes/stoner/cyclops.png"
          },{
            name: "Doodle Eyes",
            url: "/assets/collections/alien-punk-things/fits/eyes/stoner/doodle.png"
          },{
            name: "Six Eyes",
            url: "/assets/collections/alien-punk-things/fits/eyes/stoner/6eyes.png"
          },{
            name: "Noun Glasses",
            url: "/assets/collections/alien-punk-things/fits/eyes/stoner/noun-glasses.png"
          }]
        },{
          name: "420 Glasses",
          variants: [{
            name: "420 Glasses",
            url: "/assets/collections/alien-punk-things/fits/eyes/glasses/420-glasses.png"
          }]
        }]
      }])
  }
  
  getTokenImageUrl(tokenId: number): string {
    return `https://alienpunkthingsprod.blob.core.windows.net/images/${tokenId}.png`;
  }

  getSmallTokenImageUrl(tokenId: number): string {
    return `https://alienpunkthingsprod.blob.core.windows.net/images/${tokenId}.png`;
  }

  getCollectionSize(): number {
    return 8888;
  }
}
