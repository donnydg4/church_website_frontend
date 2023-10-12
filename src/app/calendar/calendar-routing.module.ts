import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainLayoutComponent} from "../shared-components/main-layout/main-layout.component";
import {CalendarPage} from "./calendar.page";

const routes: Routes = [
  {
    path: 'calendar',
    component: CalendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarPageRoutingModule {
}
