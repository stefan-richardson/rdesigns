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

  panelIds = [
    {title: 'Development', message: 'Have a Look!', class: 'panel1', isActive: false, isOpen: false},
    {title: 'Design', message: 'Come see!', class: 'panel2', isActive: false, isOpen: false},
    {title: 'Games', message: 'Wanna Play?', class: 'panel3', isActive: false, isOpen: false},
    {title: 'About', message: 'Check Me Out!', class: 'panel4', isActive: false, isOpen: false},
    {title: 'Shop', message: 'Buy Stuff!', class: 'panel5', isActive: false, isOpen: false}
  ];

  isDev;
  isDesign;
  isGames;
  isAbout;
  isShop;

  panelControl(i) {
    this.toggleOpen(i);
    Observable.interval(1000)
    .take(1)
    .subscribe(_ => {
        this.toggleActive(i);
    });
  }

  toggleOpen(i) {
    this.panelIds[i].isOpen = !this.panelIds[i].isOpen;
  }

  toggleActive(i) {
    this.panelIds[i].isActive = !this.panelIds[i].isActive;
  }
}
