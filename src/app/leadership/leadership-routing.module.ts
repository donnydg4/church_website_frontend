import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadershipPage } from './leadership.page';
import {MainLayoutComponent} from "../shared-components/main-layout/main-layout.component";
import {MinistriesWeSupportPage} from "../ministries-we-support/ministries-we-support.page";

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
