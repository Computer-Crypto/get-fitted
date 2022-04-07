import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
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

  image$!: Observable<Promise<string>>;
  
  constructor(
    private collectionService: CollectionsService,
    private fitsService: FitsService) {
  }

  async ngOnInit() {
    this.collection$ = this.collectionService.getCollection(this.collectionId);

    this.image$ = await this.fitsService.customizeFit(
      this.collection$.pipe(
        map(collection => {
          return collection.baseImageUri + this.tokenId + ".png";
        })
      ), of("http://localhost:4200/assets/collections/alien-punk-things/fits/head/beanie.png")
    )
  }
}
