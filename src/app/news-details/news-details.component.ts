import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../news';
import { NewsOperationsService } from '../news-operations.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent {

  __newsService:NewsOperationsService;
  router : Router;
  activateRoute:ActivatedRoute;
  n:News = new News('','','','');

  constructor(newsService:NewsOperationsService,router : Router,activateRoute:ActivatedRoute){
    this.__newsService=newsService;
    this.router=router;
    this.activateRoute=activateRoute;

    
  }
  



}
