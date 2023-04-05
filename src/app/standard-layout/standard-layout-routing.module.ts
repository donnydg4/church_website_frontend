import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandardLayoutPage } from './standard-layout.page';
import {MainLayoutComponent} from "../shared-components/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: 'standard-layout',
    component: MainLayoutComponent,
    children: [
      {path: '', component: StandardLayoutPage}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StandardLayoutPageRoutingModule {}
