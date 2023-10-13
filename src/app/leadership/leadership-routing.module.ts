import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LeadershipPage} from './leadership.page';

const routes: Routes = [
  {
    path: 'leadership',
    component: LeadershipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadershipPageRoutingModule {}
