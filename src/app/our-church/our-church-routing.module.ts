import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurChurchPage } from './our-church.page';

const routes: Routes = [
  {
    path: '',
    component: OurChurchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurChurchPageRoutingModule {}
