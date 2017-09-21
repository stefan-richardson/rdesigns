import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScroll } from 'angular2-drag-scroll';

@Component({
  selector: 'app-web-design-features',
  templateUrl: './web-design-features.component.html',
  styleUrls: ['./web-design-features.component.scss']
})
export class WebDesignFeaturesComponent implements OnInit {
  @ViewChild('nav', {read: DragScroll}) ds: DragScroll;

  constructor() { }

  ngOnInit() {
  }

}
