import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Styling
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { NavigationComponent } from './navigation/navigation.component';

// Import modules
import { HomeModule } from './home/home.module';
import { HTTP404Component } from './http404/http404.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, HTTP404Component],
  imports: [NgbCollapseModule, HomeModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
