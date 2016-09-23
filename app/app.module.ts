import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './hero.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import { routing }              from './app.routing';



@NgModule({
    imports:  [ 
                BrowserModule,
                FormsModule,
                HttpModule,
                InMemoryWebApiModule.forRoot(InMemoryDataService),
                routing 
              ],
    declarations: [ 
                    AppComponent,
                    HeroDetailComponent,
                    HeroesComponent,
                    DashboardComponent
                 ],
    providers: [ HeroService],
    bootstrap: [ AppComponent ]

})

export class AppModule { }