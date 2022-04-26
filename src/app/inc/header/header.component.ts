import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  showHeader: boolean = false;

  constructor(private router: Router) {
    router.events.forEach(event => {
      if(event instanceof NavigationStart) {
        if (event['url'] === '/news-detail') {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }
    })
  }

  ngOnInit(): void {}

}
