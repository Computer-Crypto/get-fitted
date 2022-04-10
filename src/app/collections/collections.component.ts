import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Collection } from '../collection-integrations/base-collection';
import { CollectionsService } from '../collections.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  collections: Observable<Collection[]> = of([]);

  constructor(private collectionsService: CollectionsService) { }

  ngOnInit(): void {
    this.collections = this.collectionsService.getCollections();
  }
}
