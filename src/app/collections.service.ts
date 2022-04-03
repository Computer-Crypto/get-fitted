import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Collection from './models/collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor() { }

  getCollections(): Observable<Collection[]> {
    return of([
      new Collection("bored-ape-yacht-club", "Bored Ape Yacht Club", "/assets/collections/bored-ape-yacht-club/logo.png"),
      new Collection("alien-punk-thing", "Alien Punk Things", "/assets/collections/alien-punk-things/logo.png")
    ]);
  }
}
