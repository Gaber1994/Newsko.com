import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApinewsService {

  constructor(private http:HttpClient) { }


  getnews(country , category) {
    let myurl = 'http://newsapi.org/v2/top-headlines?country='+country+'&category='+category+'&apiKey=61031337ac06467bbc72bff36cc0fb0e'
    return this.http.get(myurl);
  }
}
