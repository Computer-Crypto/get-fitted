import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { Collection } from './base-collection';
import { FitGroup } from './fit';

export class BoredApeYachtClub extends Collection {
    
    constructor(http: HttpClient) {
        super(
            http,
            "bored-ape-yacht-club",
            "Bored Ape Yacht Club", 
            "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
            "/assets/collections/bored-ape-yacht-club/logo.png",
            [{
                name: "Hat",
                order: 0,
                fits: [{
                  name: "Baseball Hat",
                  variants: [{
                    name: "Alien Punk Things",
                    url: "/assets/collections/bored-ape-yacht-club/fits/hats/apt_hat.png"
                  },{
                    name: "CSSC",
                    url: "/assets/collections/bored-ape-yacht-club/fits/hats/ccsc_hat.png"
                  },{
                    name: "Bimah",
                    url: "/assets/collections/bored-ape-yacht-club/fits/hats/bimah_hat.png"
                  }]
                }]
            },{
                name: "Shirt",
                order: 1,
                fits: [{
                  name: "Hoodie",
                  variants: [{
                    name: "Alien Punk Things",
                    url: "/assets/collections/bored-ape-yacht-club/fits/shirts/apt_hoodie.png"
                  },{
                    name: "CSSC",
                    url: "/assets/collections/bored-ape-yacht-club/fits/shirts/ccsc_hoodie.png"
                  },{
                    name: "Bimah",
                    url: "/assets/collections/bored-ape-yacht-club/fits/shirts/bimah_hoodie.png"
                  }]
                }]
            }]
        );
    }

    getTokenImageUrl(tokenId: number): string {
        return `https://nftoutfits.blob.core.windows.net/bayc/images/${tokenId}.png`;
    }


    getCollectionSize(): number {
        return 10000;
    }
}