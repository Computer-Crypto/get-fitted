import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, of, Subject } from 'rxjs';
import { CollectionsService } from '../collections.service';
import { FitsService } from '../fits.service';
import Collection from '../models/collection';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.css']
})
export class CustomizeComponent implements OnInit {

  @Input()
  collectionId!: string;
  
  @Input()
  tokenId!: string;

  collection$!: Observable<Collection>;
  headImages$!: BehaviorSubject<string>;
  shirtImages$!: BehaviorSubject<string>;
  image$!: Observable<Promise<string>>;

  headImage: string = "";
  shirtImage: string = "";
  
  constructor(
    private collectionService: CollectionsService,
    private fitsService: FitsService) {
  }

  async ngOnInit() {
    this.collection$ = this.collectionService.getCollection(this.collectionId);
    
    this.headImages$ = new BehaviorSubject<string>("");
    this.shirtImages$ = new BehaviorSubject<string>("");

    this.image$ = await this.fitsService.customizeFit(
      this.collection$.pipe(
        map(collection => {
          return collection.baseImageUri + this.tokenId + ".png";
        })
      ), 
      this.headImages$,
      this.shirtImages$
    )
  }

  onHeadImageChange() {
    this.headImages$.next(this.headImage);
  }

  onShirtImageChange() {
    this.shirtImages$.next(this.shirtImage);
  }
}
