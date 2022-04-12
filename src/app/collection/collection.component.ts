import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';
import { Collection } from '../model/base-collection';
import { CollectionsService } from '../collections.service';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  collectionId!: string;
  collection$!: Observable<Collection>;
  page: number = 1;
  pageSize: number = 24;

  constructor(
    private collectionsService: CollectionsService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.collectionId = params['collectionId'];
      this.collection$ = this.collectionsService.getCollection(this.collectionId);
    });
  }

  getTokenIds(collection: Collection): number[] {
    return Array.from(Array(collection.getCollectionSize()).keys());
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }
}
