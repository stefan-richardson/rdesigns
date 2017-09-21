// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragScrollModule } from 'angular2-drag-scroll';
// COMPONENTS
import { AppComponent } from './app.component';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { WebDesignSectionComponent } from './web-design/web-design-section/web-design-section.component';
import { WebDesignFeaturesComponent } from './web-design/web-design-features/web-design-features.component';
import { GraphicDesignSectionComponent } from './graphic-design/graphic-design-section/graphic-design-section.component';
import { IllustrationSectionComponent } from './illustrations/illustration-section/illustration-section.component';
import { AboutSectionComponent } from './about/about-section/about-section.component';
import { ShopSectionComponent } from './shop/shop-section/shop-section.component';

// SERVICES
import { SectionToggleService } from './services/section-toggle.service';

// OTHER IMPORTS
import {
  MdSnackBarModule, MdIconModule, MdInputModule, MdToolbarModule,
  MdCardModule, MdButtonModule, MdDialogModule, MdMenuModule, MdSidenavModule
} from '@angular/material';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideNavComponent,
    WebDesignSectionComponent,
    GraphicDesignSectionComponent,
    IllustrationSectionComponent,
    AboutSectionComponent,
    ShopSectionComponent,
    WebDesignFeaturesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    DragScrollModule,
    MdInputModule, MdToolbarModule, MdCardModule, MdIconModule, MdDialogModule,
    MdButtonModule, MdMenuModule, MdSnackBarModule, MdSidenavModule,
    AppRoutingModule, // AppRoutingModule should ALWAYS last here to ensure the wild card route '**' is the last.
  ],
  providers: [SectionToggleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
