import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OurMinistriesPage} from './our-ministries.page';

const routes: Routes = [
  {
    path: 'our-ministries',
    component: OurMinistriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurMinistriesPageRoutingModule {}
