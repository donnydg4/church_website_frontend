import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SermonsPage} from './sermons.page';
import {MainLayoutComponent} from "../shared-components/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: 'sermons',
    component: SermonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SermonsPageRoutingModule {
}
