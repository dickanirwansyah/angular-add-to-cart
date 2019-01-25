import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app.routing.module';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {ProdukComponent} from './produk/produk.component';
import {CartComponent} from './cart/cart.component';

import {ProductService} from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdukComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
