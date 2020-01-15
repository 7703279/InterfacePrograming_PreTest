import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  @Input() title:string;
  @Input() rating:number;
  @Input() shortDescription:string;
  @Input() runtime:number;
  @Input() releaseDate:Date;

  constructor() { 

  }

  ngOnInit() {
  }

}
