import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RestorationSite } from './restoration-site';
import { RestorationService } from './restoration.service';

@Component ({
    selector: 'my-restoration-detail',
    templateUrl: './app/restoration/restoration-detail.component.html',
    styleUrls: ['./app/restoration/restoration-detail.component.css']
})

export class RestorationDetailComponent implements OnInit {
   
   constructor(
       private restorationService: RestorationService,
       private route: ActivatedRoute) {

       }

       ngOnInit(): void {
           this.route.params.forEach((params: Params) => {
               let id = params['Map_ID'];  //removed + from hero detail template so as to not be a number
               this.restorationService.getRestorationSite(id).then(restorationSite => this.site = restorationSite);
           })
       }
   
       goBack(): void {
           window.history.back();
       }

       save(): void {
           this.restorationService.update(this.site).then(this.goBack);
       }
       
  // @Input()
    site: RestorationSite;
}