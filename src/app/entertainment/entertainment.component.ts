import { Component, OnInit } from '@angular/core';
import { ApinewsService } from '../apinews.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  entertainmentArticls : any ;
  constructor(private api : ApinewsService) { }

  ngOnInit(): void {
    this.api.getnews('eg' ,'entertainment').subscribe(entertainment_news=> {
      console.log(entertainment_news);

      this.entertainmentArticls = entertainment_news['articles'];
      console.log(this.entertainmentArticls);
    })

  }

}
