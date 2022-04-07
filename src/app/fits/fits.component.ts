import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fits',
  templateUrl: './fits.component.html',
  styleUrls: ['./fits.component.css']
})
export class FitsComponent implements OnInit {

  tokenId!: string;
  collectionId!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.collectionId = params['collectionId'];
      this.tokenId = params['tokenId'];
    });
  }
}
