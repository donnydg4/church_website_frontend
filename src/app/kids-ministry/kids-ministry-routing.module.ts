import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {KidsMinistryPage} from './kids-ministry.page';

const routes: Routes = [
  {
    path: '',
    component: KidsMinistryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KidsMinistryPageRoutingModule {}
