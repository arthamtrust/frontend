import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Loading bar
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';

// Import modules
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { StudentsModule } from './students/students.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    HomeModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StudentsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
