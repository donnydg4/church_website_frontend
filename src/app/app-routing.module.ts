import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./shared-components/main-layout/main-layout.component";
import {CalendarPage} from "./calendar/calendar.page";
import {SermonsPage} from "./sermons/sermons.page";
import {DevotionalsPage} from "./devotionals/devotionals.page";
import {SeriesPage} from "./series/series.page";
import {GuestSpeakersPage} from "./guest-speakers/guest-speakers.page";
import {ConnectPage} from "./connect/connect.page";
import {AllEventsPage} from "./all-events/all-events.page";
import {StandardLayoutPage} from "./standard-layout/standard-layout.page";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'calendar',
    component: MainLayoutComponent,
    children: [
      {path: '', component: CalendarPage},
    ]
  },
  {
    path: 'sermons',
    component: MainLayoutComponent,
    children: [
      {path: '', component: SermonsPage}
    ]
  },
  {
    path: 'devotionals',
    component: MainLayoutComponent,
    children: [
      {path: '', component: DevotionalsPage}
    ]
  },
  {
    path: 'series',
    component: MainLayoutComponent,
    children: [
      {path: '', component: SeriesPage}
    ]
  },
  {
    path: 'guest-speakers',
    component: MainLayoutComponent,
    children: [
      {path: '', component: GuestSpeakersPage}
    ]
  },
  {
    path: 'connect',
    component: MainLayoutComponent,
    children: [
      {path: '', component: ConnectPage}
    ]
  },
  {
    path: 'events',
    component: MainLayoutComponent,
    children: [
      {path: '', component: AllEventsPage},
    ]
  },
  {
    path: 'standard-layout',
    component: MainLayoutComponent,
    children: [
      {path: '', component: StandardLayoutPage},
    ]
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
