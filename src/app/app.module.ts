// MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
// COMPONENTS
import { AppComponent } from './app.component';

// OTHER IMPORTS
import 'hammerjs';
import { DevelopmentComponent } from './development/development/development.component';

@NgModule({
  declarations: [
    AppComponent,
    DevelopmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule.forRoot(),
    AppRoutingModule, // AppRoutingModule should ALWAYS last here to ensure the wild card route '**' is the last.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
