import { Component, Input, OnInit } from '@angular/core';
import { RatingList } from '../app.component';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.css']
})
export class RatingListComponent implements OnInit {
  @Input() ratings: RatingList[];
  constructor() { }

  ngOnInit() {
  }

}