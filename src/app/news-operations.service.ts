import { Injectable } from '@angular/core';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsOperationsService {
 
  constructor() { }
  newsArr:News[]=[];

  addNews(newsFromUser:News){
    this.newsArr.push(newsFromUser);
    console.log("Inside News Service:News Added"+newsFromUser.headline);

  }
  getNewsArr():News[]
  {
    return this.newsArr;
  }


  getNewsByCategory(filterNews:string):News[]
  {
   let outputArr:News[] = [];

    this.newsArr.forEach(n=>{
      if(n.category == filterNews)
      {
        outputArr.push(n);
      }
    });
    return outputArr;
  }

  

}
