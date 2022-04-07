import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import Collection from './models/collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor() { }

  // Collections will be hard coded in this service for now. 
  // May need to move it to a backeend API at some point
  getCollections(): Observable<Collection[]> {
    return of([
      new Collection(
        "bored-ape-yacht-club",
        "Bored Ape Yacht Club", 
        "/assets/collections/bored-ape-yacht-club/logo.png",
        ""
      ),
      new Collection(
        "alien-punk-things",
        "Alien Punk Things",
        "/assets/collections/alien-punk-things/logo.png",
        "https://alienpunkthingsprod.blob.core.windows.net/images/")
    ]);
  }

  getCollection(collectionId: string): Observable<Collection> {
    return this.getCollections().pipe(
      map((collections) => collections.filter(c => c.id === collectionId)[0])
    )
  }
}
