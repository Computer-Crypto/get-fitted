import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, map, Observable, of, Subject, tap } from 'rxjs';
import { Collection } from '../model/base-collection';
import { CollectionsService } from '../collections.service';
import { FitsService } from '../fits.service';
import { FitUrlChangedEvent } from '../fit-picker/fit-picker.component';

@Component({
  selector: 'app-fits',
  templateUrl: './fits.component.html',
  styleUrls: ['./fits.component.css']
})
export class FitsComponent implements OnInit {

  collectionId!: string;
  tokenId!: string;
  
  collection$!: Observable<Collection>;
  image$!: Observable<Promise<string>>;
  fitImageUrls$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  selectedFits: any = {};
  
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

      this.image$ = await this.fitsService.customizeFit(
        this.collection$.pipe(
          map(collection => {
            return collection.getTokenImageUrl(parseInt(this.tokenId))
          })
        ),
        this.fitImageUrls$
      )
    });
  }

  onFitUrlChange(event: FitUrlChangedEvent) {
    this.selectedFits[event.fitGroupName] = event;
    const fits = Object.values(this.selectedFits) as FitUrlChangedEvent[];
    const urls = fits.sort((a, b) => (a.order > b.order) ? 1 : -1).map(a => a.url);
    this.fitImageUrls$.next(urls);
  }
}
