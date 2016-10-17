"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angularfire2_1 = require('angularfire2');
require('rxjs/add/operator/toPromise');
var RestorationServiceFB = (function () {
    function RestorationServiceFB(af) {
        this.projects = af.database.list('items');
    }
    RestorationServiceFB.prototype.handleError = function (error) {
        console.error('Yo error', error);
        return Promise.reject(error.message || error);
    };
    RestorationServiceFB = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], RestorationServiceFB);
    return RestorationServiceFB;
}());
exports.RestorationServiceFB = RestorationServiceFB;
// private RestorationSitesUrl = 'app/heroes';
// private headers = new Headers({'Content-Type': 'application/json'});
// constructor(private http:Http) { }
// getRestorationSites(): Promise<RestorationSite[]> {
//     return this.http.get(this.RestorationSitesUrl)
//             .toPromise()
//             .then(response => response.json().data.sites as RestorationSite[])
//             .catch(this.handleError);
// } 
// getRestorationSite(id: string): Promise<RestorationSite> {
//     return this.getRestorationSites()
//         .then(RestorationSites => RestorationSites.find(restorationSite => restorationSite.Map_ID === id));
// }
// update(restorationSite: RestorationSite): Promise<RestorationSite> {
//     const url = `${this.RestorationSitesUrl}/${restorationSite.Map_ID}`;
//     return this.http
//             .put(url, JSON.stringify(restorationSite), {headers: this.headers})
//             .toPromise()
//             .then(() => restorationSite)
//             .catch(this.handleError);
// }
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
//# sourceMappingURL=restoration.serviceFB.js.map