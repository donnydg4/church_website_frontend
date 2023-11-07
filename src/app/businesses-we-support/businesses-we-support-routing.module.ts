import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessesWeSupportPage } from './businesses-we-support.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessesWeSupportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessesWeSupportPageRoutingModule {}
