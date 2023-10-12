import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllEventsPage } from './all-events.page';
import {MainLayoutComponent} from "../shared-components/main-layout/main-layout.component";

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
