import { Component, Input, OnInit } from '@angular/core';
import { Collection } from '../model/base-collection';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @Input()
  collection!: Collection

  constructor() { }

  ngOnInit(): void {
  }

}
