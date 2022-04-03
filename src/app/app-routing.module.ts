import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { FitsComponent } from './fits/fits.component';
import { HomeComponent } from './home/home.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'fits', component: FitsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
