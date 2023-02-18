import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { PoliticsComponent } from './politics/politics.component';
import { CrimeComponent } from './crime/crime.component';
import { WorldComponent } from './world/world.component';
import { TechnologyComponent } from './technology/technology.component';
import { SportsComponent } from './sports/sports.component';
import { InfoPipe } from './info.pipe';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


const allLinks:Routes = [
  {path:'addNews',component:AdminComponent},
  {path:'businessNews',component:BusinessNewsComponent},
  {path:'crime',component:CrimeComponent},
  {path:'politics',component:PoliticsComponent},
  {path:'sports',component:SportsComponent},
  {path:'technology',component:TechnologyComponent},
  {path:'world',component:WorldComponent},
 
  
]



@NgModule({
  declarations: [
    AppComponent,
    BusinessNewsComponent,
    PoliticsComponent,
    CrimeComponent,
    WorldComponent,
    TechnologyComponent,
    SportsComponent,
    InfoPipe,
    HeaderComponent,
    AdminComponent,
    NewsDetailsComponent
    
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
