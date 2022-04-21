import { Injectable } from '@angular/core';
import { loadImage } from 'canvas';
import { combineLatest, concatMap, map, Observable } from 'rxjs';
import mergeImages from 'merge-images'; // Don't remove this

@Injectable({
  providedIn: 'root'
})
export class FitsService {

  constructor() { }

  async customizeFit(
    nftImageUrl$: Observable<string>,
    fitImageUrls$: Observable<string[]>) {
    return combineLatest([nftImageUrl$, fitImageUrls$]).pipe(
      concatMap(async ([nftImageUrl, fitImageUrls]) => {

        var nftImage = await loadImage(nftImageUrl, { crossOrigin: "anonymous" }) as any;
        
        const canvas = document.createElement('canvas') as any;
        canvas.height = nftImage.height;
        canvas.width = nftImage.width;
        
        var ctx = canvas.getContext("2d");
        ctx?.drawImage(nftImage, 0, 0);

        if(fitImageUrls) {
          for(let x = 0; x < fitImageUrls.length; x++) {
            const imageUrl = fitImageUrls[x];
            if(imageUrl) {
              const image = await loadImage(imageUrl);
              ctx?.drawImage(image, 0, 0, nftImage.width, nftImage.height);
            }
          }
        }
        
        return canvas.toDataURL("image/png");
      })
    );
  }
}
