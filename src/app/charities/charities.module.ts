import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharitiesRoutingModule } from './charities-routing.module';
import { CharitiesComponent } from './charities.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { CharitiesService } from './charities.service';

@NgModule({
  declarations: [CharitiesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CharitiesRoutingModule,
    SharedModule,
  ],
  providers: [CharitiesService],
})
export class CharitiesModule {}
