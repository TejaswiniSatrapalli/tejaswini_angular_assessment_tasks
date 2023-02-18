import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../news';
import { NewsOperationsService } from '../news-operations.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {
  __newsService:NewsOperationsService;
  router:Router;
 
  allNews : Array<News> =[];

  constructor(newsService:NewsOperationsService,router:Router)
  {
    this.__newsService=newsService;
    this.allNews=this.__newsService.getNewsArr();
    this.router = router;
   

  }

  readFullArticle(nheadline:string)
  {

    
    this.router.navigate(['newsDetail',nheadline]);
  }
  

  getFilterData(filterValue:string)
  {
    console.log(" Filter Value "+filterValue);

    this.allNews = this.__newsService.getNewsByCategory(filterValue);
  }

}




