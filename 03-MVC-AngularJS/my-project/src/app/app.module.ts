import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableComponent} from './components/table/table.component'
import { MovieComponent } from './components/movie/movie.component'
import { MovieServiceClient } from './services/movie.service.client';




@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    MovieServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
