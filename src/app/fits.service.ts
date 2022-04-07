import { Injectable } from '@angular/core';
import { loadImage } from 'canvas';
import { combineLatest, concatMap, map, Observable } from 'rxjs';
import mergeImages from 'merge-images';

@Injectable({
  providedIn: 'root'
})
export class FitsService {

  constructor() { }

  async customizeFit(
    nftImageUrl$: Observable<string>,
    headImageUrl$: Observable<string>,
    shirtImageUrl$: Observable<string>) {
    return combineLatest([nftImageUrl$, headImageUrl$, shirtImageUrl$]).pipe(
      concatMap(async ([nftImageUrl, headImageUrl, shirtImageUrl]) => {
        
        var nftImage = await loadImage(nftImageUrl, { crossOrigin: "anonymous" }) as any;
        
        const canvas = document.createElement('canvas') as any;
        canvas.height = nftImage.height;
        canvas.width = nftImage.width;
        
        var ctx = canvas.getContext("2d");
        ctx?.drawImage(nftImage, 0, 0);

        if(headImageUrl) {
          var headImage = await loadImage(headImageUrl);
          ctx?.drawImage(headImage, 0, 0);
        }

        if(shirtImageUrl) {
          var shirtImage = await loadImage(shirtImageUrl);
          ctx?.drawImage(shirtImage, 0, 0);
        }
        
        return canvas.toDataURL("image/png");
      })
    );
  }
}
