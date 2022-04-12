import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { AlienPunkThings } from './model/alien-punk-things';
import { Collection } from './model/base-collection';
import { BoredApeYachtClub } from './model/bored-ape-yacht-club';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor(private http: HttpClient) { }

  // Collections will be hard coded in this service for now. 
  // May need to move it to a backeend API at some point
  getCollections(): Observable<Collection[]> {
    return of([
      new BoredApeYachtClub(this.http),
      new AlienPunkThings(this.http)
    ]);
  }

  getCollection(collectionId: string): Observable<Collection> {
    return this.getCollections().pipe(
      map((collections) => collections.filter(c => c.id === collectionId)[0])
    )
  }
}
