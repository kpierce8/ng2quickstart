import { Injectable } from '@angular/core';
import { RestorationSite } from './restoration-site';
import { SITES } from './mock-restoration';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestorationService {
    private RestorationSitesUrl = 'app/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http:Http) { }

    getRestorationSites(): Promise<RestorationSite[]> {
        return this.http.get(this.RestorationSitesUrl)
                .toPromise()
                .then(response => response.json().data as RestorationSite[])
                .catch(this.handleError);
    } 
    getRestorationSite(id: string): Promise<RestorationSite> {
        return this.getRestorationSites()
            .then(RestorationSites => RestorationSites.find(restorationSite => restorationSite.Map_ID === id));
    }

    update(restorationSite: RestorationSite): Promise<RestorationSite> {
        const url = `${this.RestorationSitesUrl}/${restorationSite.Map_ID}`;

        return this.http
                .put(url, JSON.stringify(restorationSite), {headers: this.headers})
                .toPromise()
                .then(() => restorationSite)
                .catch(this.handleError);
    }

    // create(name: string): Promise<RestorationSite>{
    //     return this.http
    //         .post(this.RestorationSitesUrl, JSON.stringify({name: name}), {headers: this.headers})
    //         .toPromise()
    //         .then(res => res.json().data)
    //         .catch(this.handleError);
    // }

    // delete(id: string): Promise<void>{
    //     let url = `${this.RestorationSitesUrl}/${id}`;
    //     return this.http
    //         .delete(url, {headers: this.headers})
    //         .toPromise()
    //         .then(() => null)
    //         .catch(this.handleError);
    // }


    private handleError(error: any): Promise<any>{
        console.error('Yo error', error);
        return Promise.reject(error.message || error);
    }
}