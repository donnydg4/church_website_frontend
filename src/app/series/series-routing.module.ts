import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SeriesPage} from './series.page';
import {SeriesListPage} from "./series-list/series-list.page";
import {DefaultLayoutComponent} from "../shared-components/default-layout/default-layout.component";

const routes: Routes = [
  {
    path: '',
    component: SeriesPage
  },
  {
    path: 'series/:title',
    component: SeriesListPage,
    children: [{
      path: '',
      component: DefaultLayoutComponent
    }]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeriesPageRoutingModule {
}
