import { Component, Input, OnInit } from '@angular/core';
import { RatingList } from '../app.component';

@Component({
  selector: 'app-average-rating',
  templateUrl: './average-rating.component.html',
  styleUrls: ['./average-rating.component.css']
})
export class AverageRatingComponent implements OnInit {
  //var
  @Input() ratings: RatingList[] ;
  sum = 0;
  average = 0;

  constructor() { }

  ngOnInit() {
    console.log(this.ratings); // make sure pass ratings to average componnet
    this.sum = this.ratings.reduce((acc, curr) => acc + curr.rate, 0);
    this.average = this.sum / this.ratings.length;
    console.log(this.sum, this.average);
  }

}