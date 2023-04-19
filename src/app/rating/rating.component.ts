import { Component, Input, OnInit } from '@angular/core';
import { RatingList } from '../app.component';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rating: RatingList ;

  constructor() { }

  ngOnInit() {
  }

}