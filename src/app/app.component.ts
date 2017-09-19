import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'app works!';
  webDesignWidth = 20;
  graphicDesignWidth = 20;
  illustrationWidth = 20;
  shopWidth = 20;
  aboutWidth = 20;

  openSection(e) {
    switch(e.toElement.id) {
      case 'webDesign':
          this.webDesignWidth = 100;
          this.graphicDesignWidth = this.illustrationWidth = this.shopWidth = this.aboutWidth = 0;
        break;
      case 'graphicDesign':
          this.graphicDesignWidth = 100;
          this.webDesignWidth = this.illustrationWidth = this.shopWidth = this.aboutWidth = 0;
        break;
      case 'illustration':
          this.illustrationWidth = 100;
          this.webDesignWidth = this.graphicDesignWidth = this.shopWidth = this.aboutWidth = 0;
        break;
      case 'shopSection':
          this.shopWidth = 100;
          this.webDesignWidth = this.graphicDesignWidth = this.illustrationWidth = this.aboutWidth = 0;
        break;
      case 'aboutSection':
          this.aboutWidth = 100;
          this.webDesignWidth = this.graphicDesignWidth = this.illustrationWidth = this.shopWidth = 0;
        break;
    }
  }
}
