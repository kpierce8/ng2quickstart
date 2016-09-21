import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
    selector: 'my-app',
    styleUrls: ['./app/app.component.css'],
    templateUrl: './app/app.component.html',
    providers: [HeroService]
})

export class AppComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;

ngOnInit(): void {
  this.getHeroes();
}

constructor(private heroService: HeroService) {}

onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }

getHeroes(): void {
  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
}

}