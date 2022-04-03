import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CollectionsService } from '../collections.service';
import Collection from '../models/collection';

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
