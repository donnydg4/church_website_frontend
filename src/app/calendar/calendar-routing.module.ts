import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarPage } from './calendar.page';
import {MainLayoutComponent} from "../shared-components/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: 'calendar',
    component: MainLayoutComponent,
    children: [
      {path: '', component: CalendarPage}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarPageRoutingModule {}
