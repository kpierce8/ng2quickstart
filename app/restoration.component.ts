import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestorationSite } from './restoration-site';
import { RestorationService } from './restoration.service';


@Component({
    selector: 'my-sites',
    styleUrls: ['./app/hero.component.css'],
    templateUrl: './app/restoration.component2.html',
})

export class RestorationComponent implements OnInit {
    sites: RestorationSite[];
    selectedRestorationSite: RestorationSite;

ngOnInit(): void {
  this.getRestorationSites();
}

constructor(private router: Router,
private restorationService: RestorationService) {}

  onSelect(restorationSite: RestorationSite): void {
    this.selectedRestorationSite = restorationSite;
    }

  getRestorationSites(): void {
    this.restorationService.getRestorationSites().then(sites => this.sites = sites);
    }

  gotoDetail(): void {
    this.router.navigate([ '/site', this.selectedRestorationSite.Map_ID]);
  }

//   add(name: string): void{
//     name = name.trim();
//     if (!name) { return; }
//     this.restorationSiteService.create(name)
//       .then(restorationSite => {
//         this.sites.push(restorationSite);
//         this.selectedRestorationSite = null;
//       });
//   }

//   delete(restorationSite: RestorationSite): void {
//     this.restorationSiteService
//       .delete(restorationSite.Map_ID)
//       .then(() => {
//         this.sites = this.sites.filter(h => h !== restorationSite);
//         if (this.selectedRestorationSite === restorationSite ) { this.selectedRestorationSite = null; }
//       });
//   }

}