import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {StandardLayoutPage} from './standard-layout.page';

const routes: Routes = [
  {
    path: 'standard-layout',
    component: StandardLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StandardLayoutPageRoutingModule {}
