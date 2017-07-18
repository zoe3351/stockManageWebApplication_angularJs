import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/filter';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle = '';

  pageDesc = '';

  constructor(public router: Router) {
    router.events.filter(event => event instanceof NavigationEnd)
      .subscribe((event:NavigationEnd) => {
      if (event.url == '/dashboard'){
        this.pageTitle = 'This is HomePage';
        this.pageDesc = '';
      } else if (event.url.startsWith('/stock')){
        this.pageTitle = 'Stock Information Management';
        this.pageDesc = 'Stock Info CRUD';
      }
      });
  }

  ngOnInit() {
  }

}
