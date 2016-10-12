import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http:Http) { }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
                .toPromise()
                .then(response => response.json().data.theOtherHeroes as Hero[])
                .catch(this.handleError);
    } 
    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;

        return this.http
                .put(url, JSON.stringify(hero), {headers: this.headers})
                .toPromise()
                .then(() => hero)
                .catch(this.handleError);
    }

    create(name: string): Promise<Hero>{
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void>{
        let url = `${this.heroesUrl}/${id}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any>{
        console.error('Yo error', error);
        return Promise.reject(error.message || error);
    }
}