import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { AppRoutingModule } from './app-routing.module';      


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
