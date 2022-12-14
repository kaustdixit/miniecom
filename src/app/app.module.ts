import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListingpageComponent } from './listingpage/listingpage.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { CarouselComponent } from './homepage/carousel/carousel.component';
import { ProductcardComponent } from './listingpage/productcard/productcard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ListingpageComponent,
    ProductpageComponent,
    CarouselComponent,
    ProductcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
