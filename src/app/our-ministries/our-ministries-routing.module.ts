import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurMinistriesPage } from './our-ministries.page';
import {MainLayoutComponent} from "../shared-components/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: 'our-ministries',
    component: MainLayoutComponent,
    children: [
      {path: '', component: OurMinistriesPage},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurMinistriesPageRoutingModule {}
