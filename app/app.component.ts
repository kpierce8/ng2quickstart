import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-app',
    styleUrls: ['./app/app.component.css'],
    templateUrl: './app/app.component.html',
    providers: [HeroService]
})

export class AppComponent {
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;

constructor(private heroService: HeroService) {}

onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }

getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}

}