import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './hero.component';
import { HeroService } from './hero.service';

import { AppComponent }  from './app.component';
import { routing }  from './app.routing';

@NgModule({
    imports:  [ 
                BrowserModule,
                FormsModule,
                routing 
              ],
    declarations: [ 
                    AppComponent,
                    HeroDetailComponent,
                    HeroesComponent
                 ],
    providers: [ HeroService],
    bootstrap: [ AppComponent ]

})

export class AppModule { }