import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
    selector: 'my-heroes',
    styleUrls: ['./app/hero.component.css'],
    templateUrl: './app/hero.component.html',
})

export class HeroesComponent implements OnInit {
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