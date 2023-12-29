import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DevotionalsPage} from './devotionals.page';

const routes: Routes = [
  {
    path: '',
    component: DevotionalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevotionalsPageRoutingModule {
}
