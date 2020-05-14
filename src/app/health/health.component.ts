import { ApinewsService } from './../apinews.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private api : ApinewsService) { 

  }
  healthArticles : any;
  display : boolean =false;


  ngOnInit(): void {

    this.api.getnews('eg','health').subscribe(healthNews=>{
      console.log(healthNews)
      this.healthArticles= healthNews['articles']
      console.log(this.healthArticles)

    })

  }
  openTab (tabName){
    let x , i ;
    x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";

  }
 

}

