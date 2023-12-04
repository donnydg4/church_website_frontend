import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FaithStatementPage} from './faith-statement.page';

const routes: Routes = [
  {
    path: '',
    component: FaithStatementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaithStatementPageRoutingModule {}
