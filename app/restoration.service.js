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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var RestorationService = (function () {
    function RestorationService(http) {
        this.http = http;
        this.RestorationSitesUrl = 'app/heroes';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    RestorationService.prototype.getRestorationSites = function () {
        return this.http.get(this.RestorationSitesUrl)
            .toPromise()
            .then(function (response) { return response.json().data.sites; })
            .catch(this.handleError);
    };
    RestorationService.prototype.getRestorationSite = function (id) {
        return this.getRestorationSites()
            .then(function (RestorationSites) { return RestorationSites.find(function (restorationSite) { return restorationSite.Map_ID === id; }); });
    };
    RestorationService.prototype.update = function (restorationSite) {
        var url = this.RestorationSitesUrl + "/" + restorationSite.Map_ID;
        return this.http
            .put(url, JSON.stringify(restorationSite), { headers: this.headers })
            .toPromise()
            .then(function () { return restorationSite; })
            .catch(this.handleError);
    };
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
    RestorationService.prototype.handleError = function (error) {
        console.error('Yo error', error);
        return Promise.reject(error.message || error);
    };
    RestorationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RestorationService);
    return RestorationService;
}());
exports.RestorationService = RestorationService;
//# sourceMappingURL=restoration.service.js.map