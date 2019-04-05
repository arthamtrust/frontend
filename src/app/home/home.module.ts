import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverComponent } from './cover/cover.component';
import { HomeComponent } from './home.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [CoverComponent, HomeComponent, AboutUsComponent],
  imports: [CommonModule],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
