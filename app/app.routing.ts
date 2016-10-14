import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { RestorationDetailComponent } from './restoration/restoration-detail.component';
import { DashboardComponent } from './dashboard.component';
import { RestorationComponent } from './restoration/restoration.component';

const appRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
     {
        path: 'dashboard',
        component: DashboardComponent
    },
     {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
     {
        path: 'restoration',
        component: RestorationComponent
    },
    {
        path: 'site/:id',
        component: RestorationDetailComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);