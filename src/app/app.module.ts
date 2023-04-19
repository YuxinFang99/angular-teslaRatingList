import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RatingListComponent } from './rating-list/rating-list.component';
import { RatingComponent } from './rating/rating.component';
import { AverageRatingComponent } from './average-rating/average-rating.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    RatingListComponent,
    RatingComponent,
    AverageRatingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
