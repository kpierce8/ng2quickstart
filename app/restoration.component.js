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
        this.actions = [];
        this.selectedAction = "";
    }
    RestorationComponent.prototype.ngOnInit = function () {
        this.getRestorationSites();
    };
    RestorationComponent.prototype.onSelect = function (restorationSite) {
        this.selectedRestorationSite = restorationSite;
    };
    RestorationComponent.prototype.onActionSelect = function (action) {
        this.selectedAction = action;
        this.getFilteredRestorationSites();
    };
    RestorationComponent.prototype.getActions = function (sites) {
        console.log('there are ' + sites.length + ' sites');
        this.actions = [];
        this.actions.push('All');
        for (var _i = 0, sites_1 = sites; _i < sites_1.length; _i++) {
            var site = sites_1[_i];
            if (this.actions.indexOf(site.Action) < 0)
                this.actions.push(site.Action);
        }
        console.log(this.actions);
    };
    RestorationComponent.prototype.getRestorationSites = function () {
        var _this = this;
        this.restorationService.getRestorationSites().then(function (sites) {
            _this.sites = sites;
            _this.filteredSites = sites;
            _this.actionCount = sites.length;
            _this.getActions(sites);
        });
    };
    RestorationComponent.prototype.getFilteredRestorationSites = function () {
        if (this.selectedAction === 'All') {
            this.getRestorationSites();
        }
        else {
            this.filteredSites = [];
            for (var _i = 0, _a = this.sites; _i < _a.length; _i++) {
                var site = _a[_i];
                if (site.Action === this.selectedAction) {
                    this.filteredSites.push(site);
                }
            }
        }
        this.actionCount = this.filteredSites.length;
        //this.getActions(sites);
    };
    RestorationComponent.prototype.gotoDetail = function () {
        this.router.navigate(['restoration/site', this.selectedRestorationSite.Map_ID]);
    };
    RestorationComponent = __decorate([
        core_1.Component({
            selector: 'my-sites',
            styleUrls: ['./app/restoration/restoration.component.css'],
            templateUrl: './app/restoration/restoration.component2.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, restoration_service_1.RestorationService])
    ], RestorationComponent);
    return RestorationComponent;
}());
exports.RestorationComponent = RestorationComponent;
//# sourceMappingURL=restoration.component.js.map