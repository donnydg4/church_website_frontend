import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DevotionalsPage} from './devotionals.page';
import {MainLayoutComponent} from "../shared-components/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: 'devotionals',
    component: MainLayoutComponent,
    children: [
      {path: '', component: DevotionalsPage}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevotionalsPageRoutingModule {
}
