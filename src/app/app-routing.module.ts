import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from './collection/collection.component';
import { CollectionsComponent } from './collections/collections.component';
import { FitsComponent } from './fits/fits.component';

const routes: Routes = [
  { path: '', component: CollectionsComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'collections/:collectionId', component: CollectionComponent },
  { path: 'collections/:collectionId/nfts/:tokenId/fits', component: FitsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
