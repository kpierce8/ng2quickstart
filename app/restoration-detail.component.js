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
var RestorationDetailComponent = (function () {
    function RestorationDetailComponent(restorationService, route) {
        this.restorationService = restorationService;
        this.route = route;
    }
    RestorationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['Map_ID']; //removed + from hero detail template so as to not be a number
            _this.restorationService.getRestorationSite(id).then(function (restorationSite) { return _this.site = restorationSite; });
        });
    };
    RestorationDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    RestorationDetailComponent.prototype.save = function () {
        this.restorationService.update(this.site).then(this.goBack);
    };
    RestorationDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-restoration-detail',
            templateUrl: './app/restoration/restoration-detail.component.html',
            styleUrls: ['./app/restoration/restoration-detail.component.css']
        }), 
        __metadata('design:paramtypes', [restoration_service_1.RestorationService, router_1.ActivatedRoute])
    ], RestorationDetailComponent);
    return RestorationDetailComponent;
}());
exports.RestorationDetailComponent = RestorationDetailComponent;
//# sourceMappingURL=restoration-detail.component.js.map