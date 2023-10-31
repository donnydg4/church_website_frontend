import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ConnectPage} from './connect.page';

const routes: Routes = [
  {
    path: 'calendar',
    component: ConnectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectPageRoutingModule {}
