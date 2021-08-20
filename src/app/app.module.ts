import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { DetailsPokemonComponent } from './components/details-pokemon/details-pokemon.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgxSpinnerModule,
    InfiniteScrollModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [NgxSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
