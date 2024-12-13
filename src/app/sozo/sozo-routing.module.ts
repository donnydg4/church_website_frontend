import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SozoPage} from './sozo.page';

const routes: Routes = [
  {
    path: '',
    component: SozoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SozoPageRoutingModule {}
