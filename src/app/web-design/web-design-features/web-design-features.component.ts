import { Component, OnInit, ViewChild } from '@angular/core';
import { MdCard } from '@angular/material';

@Component({
  selector: 'app-web-design-features',
  templateUrl: './web-design-features.component.html',
  styleUrls: ['./web-design-features.component.scss']
})
export class WebDesignFeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navigateTo(url) {
    window.open(url, '_blank');
  }

}
