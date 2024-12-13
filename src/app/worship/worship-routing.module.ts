import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {WorshipPage} from './worship.page';

const routes: Routes = [
  {
    path: '',
    component: WorshipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorshipPageRoutingModule {}
