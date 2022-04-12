import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Collection } from './base-collection';
import { FitGroup } from './fit';

export class BoredApeYachtClub extends Collection {
    
    constructor(private http: HttpClient) {
        super(
            "bored-ape-yacht-club",
            "Bored Ape Yacht Club", 
            "/assets/collections/bored-ape-yacht-club/logo.png",
            "",
            []
        );
    }

    getTokenImageUrl(tokenId: number): string {
        return `https://nftoutfits.blob.core.windows.net/bayc/images/${tokenId}.png`;
    }

    getTokensForWallet(address: string): Observable<string[]> {
        throw new Error('Method not implemented.');
    }

    getCollectionSize(): number {
        return 10000;
    }

    getFits(): FitGroup[] {
        throw new Error('Method not implemented.');
    }
}