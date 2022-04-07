import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollectionsComponent } from './collections/collections.component';
import { WalletComponent } from './wallet/wallet.component';
import { FitsComponent } from './fits/fits.component';
import { HomeComponent } from './home/home.component';
import { CustomizeComponent } from './customize/customize.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent,
    WalletComponent,
    FitsComponent,
    HomeComponent,
    CustomizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
