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
var router_1 = require('@angular/router');
var restoration_service_1 = require('./restoration.service');
var RestorationComponent = (function () {
    function RestorationComponent(router, restorationService) {
        this.router = router;
        this.restorationService = restorationService;
    }
    RestorationComponent.prototype.ngOnInit = function () {
        this.getRestorationSites();
    };
    RestorationComponent.prototype.onSelect = function (restorationSite) {
        this.selectedRestorationSite = restorationSite;
    };
    RestorationComponent.prototype.getRestorationSites = function () {
        var _this = this;
        this.restorationService.getRestorationSites().then(function (sites) { return _this.sites = sites; });
    };
    RestorationComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/site', this.selectedRestorationSite.Map_ID]);
    };
    RestorationComponent = __decorate([
        core_1.Component({
            selector: 'my-sites',
            styleUrls: ['./app/hero.component.css'],
            templateUrl: './app/restoration.component2.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, restoration_service_1.RestorationService])
    ], RestorationComponent);
    return RestorationComponent;
}());
exports.RestorationComponent = RestorationComponent;
//# sourceMappingURL=restoration.component.js.map