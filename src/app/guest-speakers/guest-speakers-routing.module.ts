import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestSpeakersPage } from './guest-speakers.page';

const routes: Routes = [
  {
    path: '',
    component: GuestSpeakersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestSpeakersPageRoutingModule {}
