import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, map, Observable, of, Subject } from 'rxjs';
import { Collection } from '../collection-integrations/base-collection';
import { CollectionsService } from '../collections.service';
import { FitsService } from '../fits.service';

@Component({
  selector: 'app-fits',
  templateUrl: './fits.component.html',
  styleUrls: ['./fits.component.css']
})
export class FitsComponent implements OnInit {

  collectionId!: string;
  tokenId!: string;

  collection$!: Observable<Collection>;
  headImages$!: BehaviorSubject<string>;
  shirtImages$!: BehaviorSubject<string>;
  image$!: Observable<Promise<string>>;

  headImage: string = "";
  shirtImage: string = "";
  
  constructor(
    private collectionService: CollectionsService,
    private fitsService: FitsService,
    private route: ActivatedRoute) {
  }

  async ngOnInit() {

    this.route.params.subscribe(async params => {
      this.collectionId = params["collectionId"];
      this.tokenId = params["tokenId"];

      this.collection$ = this.collectionService.getCollection(this.collectionId);

      this.headImages$ = new BehaviorSubject<string>("");
      this.shirtImages$ = new BehaviorSubject<string>("");

      this.image$ = await this.fitsService.customizeFit(
        this.collection$.pipe(
          map(collection => {
            return collection.getTokenImageUrl(parseInt(this.tokenId))
          })
        ), 
        this.headImages$,
        this.shirtImages$
      )
    });
  }

  onHeadImageChange() {
    this.headImages$.next(this.headImage);
  }

  onShirtImageChange() {
    this.shirtImages$.next(this.shirtImage);
  }
}
