import { ApinewsService } from './../apinews.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sportsArticles  : any;

  constructor(private api: ApinewsService) { }

  ngOnInit(): void {

    this.api.getnews('eg','sports').subscribe(sports_news=>{
      console.log(sports_news);
      
      this.sportsArticles = sports_news['articles'];

      console.log(this.sportsArticles);
    })
    
  }

  

}
