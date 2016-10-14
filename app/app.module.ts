import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './hero/hero.component';
import { HeroDetailComponent }  from './hero/hero-detail.component';
import { HeroSearchComponent }  from './hero/hero-search.component';
import { HeroSearchService }  from './hero/hero-search.service';
import { HeroService }          from './hero/hero.service';
import { RestorationComponent }      from './restoration/restoration.component';
import { RestorationDetailComponent }  from './restoration/restoration-detail.component';
import { RestorationService }   from './restoration/restoration.service';
import { routing }              from './app.routing';
import './rxjs-extensions';


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
                    RestorationDetailComponent,
                    HeroesComponent,
                    DashboardComponent,
                    RestorationComponent,
                    HeroSearchComponent
                    
                 ],
    providers: [ HeroService, RestorationService ],
    bootstrap: [ AppComponent ]

})

export class AppModule { }