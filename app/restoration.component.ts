import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestorationSite } from './restoration-site';
import { RestorationService } from './restoration.service';


@Component({
    selector: 'my-sites',
    styleUrls: ['./app/hero.component.css'],
    templateUrl: './app/restoration/restoration.component.html',
})

export class RestorationComponent implements OnInit {
    sites: RestorationSite[];
    filteredSites: RestorationSite[];
    actions: string[] = [];
    selectedRestorationSite: RestorationSite;
    selectedAction: string = "";
    actionCount: number;

ngOnInit(): void {
  this.getRestorationSites();
}

constructor(private router: Router,
private restorationService: RestorationService) {}

  onSelect(restorationSite: RestorationSite): void {
    this.selectedRestorationSite = restorationSite;
    }


onActionSelect(action: string): void {

    this.selectedAction = action;
this.getFilteredRestorationSites();
}

getActions(sites: RestorationSite[]): void {
    console.log('there are ' + sites.length + ' sites');
    this.actions = [];
    this.actions.push('All');
    for (var site of sites) {
        if (this.actions.indexOf(site.Action) < 0)     
        this.actions.push(site.Action);    
    }
    console.log(this.actions);
} 
 
  getRestorationSites(): void {
    this.restorationService.getRestorationSites().then(sites => {   
        this.sites = sites;     
        this.filteredSites = sites;     
        this.actionCount = sites.length;
        this.getActions(sites);
        });
    }

    getFilteredRestorationSites(): void {
        if(this.selectedAction === 'All'){
            this.getRestorationSites();
        }  else {
            this.filteredSites = [];
            for(var site of this.sites){
                if (site.Action === this.selectedAction){
                    this.filteredSites.push(site);
                }
            }
        }
        this.actionCount = this.filteredSites.length;
        //this.getActions(sites);
      
    }



  gotoDetail(): void {
    this.router.navigate([ 'restoration/site', this.selectedRestorationSite.Map_ID]);
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