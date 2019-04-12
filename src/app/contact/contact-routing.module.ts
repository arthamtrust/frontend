import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DonateComponent } from './donate/donate.component';

const routes: Routes = [
  {
    path: 'contact-us',
    component: ContactComponent,
    children: [
      { path: '', component: ContactUsComponent },
      { path: 'donate', component: DonateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
