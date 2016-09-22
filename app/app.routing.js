"use strict";
var router_1 = require('@angular/router');
var hero_component_1 = require('./hero.component');
var dashboard_component_1 = require('./dashboard.component');
var appRoutes = [
    {
        path: 'heroes',
        component: hero_component_1.HeroesComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map