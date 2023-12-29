import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MinistriesWeSupportPage} from './ministries-we-support.page';

const routes: Routes = [
  {
    path: '',
    component: MinistriesWeSupportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinistriesWeSupportPageRoutingModule {}
