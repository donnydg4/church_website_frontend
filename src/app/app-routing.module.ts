import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {CalendarPage} from "./calendar/calendar.page";
import {SermonsPage} from "./sermons/sermons.page";
import {DevotionalsPage} from "./devotionals/devotionals.page";
import {SeriesPage} from "./series/series.page";
import {GuestSpeakersPage} from "./guest-speakers/guest-speakers.page";
import {ConnectPage} from "./connect/connect.page";
import {AllEventsPage} from "./all-events/all-events.page";
import {StandardLayoutPage} from "./standard-layout/standard-layout.page";
import {MinistriesWeSupportPage} from "./ministries-we-support/ministries-we-support.page";
import {OurMinistriesPage} from "./our-ministries/our-ministries.page";
import {LeadershipPage} from "./leadership/leadership.page";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'calendar',
    component: CalendarPage,
  },
  {
    path: 'sermons',
    component: SermonsPage
  },
  {
    path: 'devotionals',
    component: DevotionalsPage
  },
  {
    path: 'series',
    component: SeriesPage
  },
  {
    path: 'guest-speakers',
    component: GuestSpeakersPage
  },
  {
    path: 'connect',
    component: ConnectPage
  },
  {
    path: 'events',
    component: AllEventsPage
  },
  {
    path: 'standard-layout',
    component: StandardLayoutPage
  },
  {
    path: 'supported-ministries',
    component: MinistriesWeSupportPage
  },
  {
    path: 'our-ministries',
    component: OurMinistriesPage
  },
  {
    path: 'leadership',
    component: LeadershipPage
  },
  {
    path: 'sermons/:title',
    loadChildren: () => import('./shared-components/video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'devotionals/:title',
    loadChildren: () => import('./shared-components/video/video.module').then( m => m.VideoPageModule)
  },
  {
    path:'guest-speakers/:title',
    loadChildren: () => import('./shared-components/video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'calendar/:title',
    component: StandardLayoutPage
  },
  {
    path: 'missions',
    loadChildren: () => import('./missions/missions.module').then( m => m.MissionsPageModule)
  },
  {
    path: 'businesses-we-support',
    loadChildren: () => import('./businesses-we-support/businesses-we-support.module').then( m => m.BusinessesWeSupportPageModule)
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
