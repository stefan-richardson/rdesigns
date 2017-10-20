import { Component, ViewEncapsulation } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  id: string;

  panelIds = [
    {development: false, isActive: false, isOpen: false},
    {design: false, isActive: false, isOpen: false},
    {games: false, isActive: false, isOpen: false},
    {about: false, isActive: false, isOpen: false},
    {shop: false, isActive: false, isOpen: false}
  ];

  toggleOpen(i) {
    console.log(this.panelIds[i]);
    this.panelIds[i].isOpen = !this.panelIds[i].isOpen;
    Observable.interval(1000)
    .takeWhile(() => !this.id)
    .subscribe(x => { 
        console.log(x);
        this.panelIds[i].isActive = !this.panelIds[i].isActive;
        if (x < 1) {this.id = 'STOP!!';}
    });

    this.id = undefined;
  }
}
