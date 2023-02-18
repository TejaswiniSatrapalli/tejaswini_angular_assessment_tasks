import { Component } from '@angular/core';
import { News } from '../news';
import { NewsOperationsService } from '../news-operations.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  __newsService:NewsOperationsService;

  constructor(newsService:NewsOperationsService)
  {
    this.__newsService=newsService;
  }


  readNews(headline:string,category:string,mainNews:string,image:string){

    console.log(headline+" "+category+" "+mainNews+" "+image);
    let newsFromUser:News = new News(headline,category,mainNews,image);
    this.__newsService.addNews(newsFromUser);

  }

}
