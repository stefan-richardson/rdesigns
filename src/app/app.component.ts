import { Component, ViewEncapsulation } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, NavigationEnd, Router  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  panelIds = [
    {title: 'Development', url: 'development', message: 'Have a Look!', class: 'panel1', isActive: false, isOpen: false},
    {title: 'Design', url: 'design', message: 'Come see!', class: 'panel2', isActive: false, isOpen: false},
    {title: 'Games', url: 'games', message: 'Wanna Play?', class: 'panel3', isActive: false, isOpen: false},
    {title: 'About', url: 'about', message: 'Check Me Out!', class: 'panel4', isActive: false, isOpen: false},
    {title: 'Shop', url: 'shop', message: 'Buy Stuff!', class: 'panel5', isActive: false, isOpen: false}
  ];

  isDev = true;
  isDesign = false;
  isGames = false;
  isAbout = false;
  isShop = false;

  navbarTitle;

  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.filter(event => event instanceof NavigationEnd)
    .subscribe((navigation: NavigationEnd) => {
      switch (navigation.url) {
        case '/':
          this.isDev = this.isDesign = this.isGames = this.isAbout = this.isShop = false;
          break;
        case '/development':
          this.isDev = true;
          this.navbarTitle = this.panelIds[0].title;
          break;
        case '/design':
          this.isDesign = true;
          this.navbarTitle = this.panelIds[1].title;
          break;
        case '/games':
          this.isGames = true;
          this.navbarTitle = this.panelIds[2].title;
          break;
        case '/about':
          this.isAbout = true;
          this.navbarTitle = this.panelIds[3].title;
          break;
        case '/shop':
          this.isShop = true;
          this.navbarTitle = this.panelIds[4].title;
          break;
      }
    });
  }

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
    for (let j = 0; j < this.panelIds.length; j++) {
      if(j !== i) {
        this.panelIds[j].isOpen = false;
      }
    }
  }

  toggleActive(i) {
    this.panelIds[i].isActive = !this.panelIds[i].isActive;
    for (let j = 0; j < this.panelIds.length; j++) {
      if(j !== i) {
        this.panelIds[j].isActive = false;
      }
    }
  }

  openSection(i) {
    switch (i) {
      case 0:
        this.isDev = true;
        break;
      case 1:
        this.isDesign = true;
        break;
      case 2:
        this.isGames = true;
        break;
      case 3:
        this.isAbout = true;
        break;
      case 4:
        this.isShop = true;
        break;
    }
    this.router.navigate([this.panelIds[i].url])
  }

  sectionOpen() {
    if (this.isDev || this.isDesign || this.isGames || this.isAbout || this.isShop) {
      return true;
    } else {
      return false;
    }
  }

  openMenu() {
    this.isDev = this.isDesign = this.isGames = this.isAbout = this.isShop = false;
    this.router.navigate(['/']);
  }
}
