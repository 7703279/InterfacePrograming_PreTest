import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title:string;
  rating:number;
  shortDescription:string;
  runtime:number;
  releaseDate:Date;
  movieThumbnail:string;

  constructor() { 
    this.title='Dragon 2';
    this.rating=5;
    this.shortDescription='How to Train Your Dragon'
    this.runtime=100;
    this.releaseDate= new Date('2000-10-10');
    this.movieThumbnail="https://image.freepik.com/free-vector/hand-drawn-dragon_53876-88179.jpg";
  }
}
