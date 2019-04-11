import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Styling
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
    AppRoutingModule,
    StudentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
