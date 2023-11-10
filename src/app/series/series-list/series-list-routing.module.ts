import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SeriesListPage} from './series-list.page';

const routes: Routes = [
  {
    path: '',
    component: SeriesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeriesListPageRoutingModule {}
