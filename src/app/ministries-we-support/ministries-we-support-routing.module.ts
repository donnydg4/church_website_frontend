import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinistriesWeSupportPage } from './ministries-we-support.page';
import {MainLayoutComponent} from "../shared-components/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: 'supported-ministries',
    component: MainLayoutComponent,
    children: [
      {path: '', component: MinistriesWeSupportPage},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinistriesWeSupportPageRoutingModule {}
