import { Inject, Injectable } from '@angular/core';
import { loadImage, Canvas } from 'canvas';
import { combineLatest, map, Observable } from 'rxjs';
import mergeImages from 'merge-images';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FitsService {

  constructor(@Inject(DOCUMENT) private document: Document) { }


  async customizeFit(nftImageUrl$:Observable<string>, headImageUrl$: Observable<string>) {
    return combineLatest([nftImageUrl$, headImageUrl$]).pipe(
      map(async ([nftImageUrl, headImageUrl]) => {
        var nftImage = await loadImage(nftImageUrl) as any;
        var headImage = await loadImage(headImageUrl) as any;
        const canvas = document.createElement('canvas') as any;
        canvas.height = nftImage.height;
        canvas.width = nftImage.width;
        var ctx = canvas.getContext("2d");
        ctx?.drawImage(nftImage, 0, 0);
        ctx?.drawImage(headImage, 0, 0);
        return canvas.toDataURL();
      })
    );
  }
}
