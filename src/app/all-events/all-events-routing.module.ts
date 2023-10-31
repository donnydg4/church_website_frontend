import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AllEventsPage} from './all-events.page';

const routes: Routes = [
  {
    path: 'events',
    component: AllEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllEventsPageRoutingModule {}
