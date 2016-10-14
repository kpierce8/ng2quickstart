import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from './hero/hero.service';
import { Hero } from './hero/hero';


@Component ({
    selector: 'my-dashboard',
    templateUrl: './app/dashboard.component.html',
    styleUrls: ['./app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    title = "My dashboard";
    heroes: Hero[] = [];

constructor(private router: Router,
    private heroService: HeroService) {}

ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,10));
}

gotoDetail(hero: Hero): void { 
    let link = [ '/detail', hero.id];
    this.router.navigate(link);
 }

}