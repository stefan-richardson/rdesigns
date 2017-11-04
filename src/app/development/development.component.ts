import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router  } from '@angular/router';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo (url) {
    window.open(url)
  }

}
