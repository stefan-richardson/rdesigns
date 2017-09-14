// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// COMPONENTS
import { AppComponent } from './app.component';
import { LandingPageComponent} from './components/landing-page/landing-page.component';
// SERVICES

// OTHER IMPORTS
import {
  MdSnackBarModule, MdIconModule, MdInputModule, MdToolbarModule,
  MdCardModule, MdButtonModule, MdDialogModule, MdMenuModule, MdSidenavModule
} from '@angular/material';
import 'hammerjs';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TopBarComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule, MdToolbarModule, MdCardModule, MdIconModule, MdDialogModule,
    MdButtonModule, MdMenuModule, MdSnackBarModule, MdSidenavModule,
    AppRoutingModule, // AppRoutingModule should ALWAYS last here to ensure the wild card route '**' is the last.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
