import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {ApinewsService} from '../apinews.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories : any;

  

  constructor(private link:ApinewsService, private router: Router) { }

  ngOnInit(): void {
    this.link.getnews('eg','sports').subscribe(news=>{
      console.log(news['articles'][0]['title']);

      this.categories = [{name:'Home',comp:'/Home'},{name:'Sports',comp:'/sports'}, {name:'Entertainment',comp:'/Entertainment'},{name:'Business',comp:'/Business'},{name:'Health',comp:'/Health'}]
       
      
    })   

  }

  go(comp_path){
    
    this.router.navigate([comp_path]);

  }

 


}
