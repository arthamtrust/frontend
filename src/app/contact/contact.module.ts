import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DonateComponent } from './donate/donate.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContactComponent, ContactUsComponent, DonateComponent],
  imports: [CommonModule, ContactRoutingModule, SharedModule],
})
export class ContactModule {}
