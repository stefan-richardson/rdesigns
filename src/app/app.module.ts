// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragScrollModule } from 'angular2-drag-scroll';
// COMPONENTS
import { AppComponent } from './app.component';

// OTHER IMPORTS
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    DragScrollModule,
    AppRoutingModule, // AppRoutingModule should ALWAYS last here to ensure the wild card route '**' is the last.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
