import { Component } from '@angular/core';
export interface RatingList{
  name: string;
  content: string;
  rate: number;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  

  ratings: RatingList[]  = [
    {
      name: 'Tod Aaron',
      content: 'Angular Material, Ngrx',
      rate: 4
    },
    {
      name: 'Jess Bing',
      content: 'This example draws a blue triangle on top of a yellowish background. The clearRect() method then erases part of the canvas.',
      rate: 1
    },
    {
      name: 'Toeey Micheal',
      content: 'Another fantastic video. You simplify things so well. love the small snippets.',
      rate: 2
    },
    {
      name: 'Lessile Mical',
      content: 'They provide a good basic understanding to help you explore on your own! So much better than the long code-a-long tutorials!',
      rate: 2
    }
  ]
}


