import { Component, OnInit } from '@angular/core';
import { avengers, xmen, dcWallArt, logoDesigns, babyRoom, moviePosters} from './image.index';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  xmenImages = xmen;
  avengersImages = avengers;
  dcWallArt = dcWallArt;
  logos = logoDesigns;
  snoopy = babyRoom;
  moviePosters = moviePosters;

  openMarvelUserImages = false;
  openDCWallArt = false;
  openPosters = false;
  openSnoopy = false;
  openLogo = false;

  constructor() {

  }

  ngOnInit() {
  }

  expandGroup (section) {
    console.log(section)
    switch (section) {
      case 'logo':
        this.openLogo = !this.openLogo;
        break;
      case 'snoopy':
        this.openSnoopy = !this.openSnoopy;
        break;
      case 'poster':
        this.openPosters = !this.openPosters;
        break;
      case 'dc':
        this.openDCWallArt = !this.openDCWallArt;
        break;
      case 'marvel':
        this.openMarvelUserImages = !this.openMarvelUserImages;
        break;
    }
  }

}
