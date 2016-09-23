import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

constructor(private router: Router,
private heroService: HeroService) {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

  gotoDetail(): void {
    this.router.navigate([ '/detail', this.selectedHero.id]);
  }

}