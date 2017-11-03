import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { DevelopmentComponent } from './development/development.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'development', component: DevelopmentComponent },
  // { path: '', component: },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })], // <-- debugging purposes only
  exports: [RouterModule]
})
export class AppRoutingModule { }
