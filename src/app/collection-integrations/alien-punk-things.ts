import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExternalProvider } from '@ethersproject/providers';
import { base64 } from 'ethers/lib/utils';
import { Observable, of, Subject } from 'rxjs';
import contract from '../contract';
import { Collection } from './base-collection';

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
      "https://alienpunkthingsprod.blob.core.windows.net/images/"
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
