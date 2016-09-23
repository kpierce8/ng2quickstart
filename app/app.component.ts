import { Component } from '@angular/core';


@Component ({
    selector: 'my-app',
    styleUrls: [ 'app/app.component.css'],
    template: `
    <h1>{{ title }}</h1>
    <nav>
    <a routerLink="/dashboard"  routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <h3>If I put a bunch of stuff here</h3>
    <br/>
    <br/>
    <br/>
    <br/>
    <router-outlet></router-outlet>
    <p> the router outlet is where the stuff from the router links goes</p>
    `
})

export class AppComponent {
    title = "My title";

}