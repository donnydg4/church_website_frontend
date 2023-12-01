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
import {DefaultLayoutComponent} from "./shared-components/default-layout/default-layout.component";
import {HomePage} from "./home/home.page";
import {SeriesListPage} from "./series/series-list/series-list.page";
import {VideoPage} from "./shared-components/video/video.page";
import {FaithStatementPage} from "./faith-statement/faith-statement.page";

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: 'home',
        component: HomePage
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
        path: 'events/:title',
        component: StandardLayoutPage
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
        loadChildren: () => import('./shared-components/video/video.module').then(m => m.VideoPageModule)
      },
      {
        path: 'devotionals/:title',
        loadChildren: () => import('./shared-components/video/video.module').then(m => m.VideoPageModule)
      },
      {
        path: 'guest-speakers/:title',
        loadChildren: () => import('./shared-components/video/video.module').then(m => m.VideoPageModule)
      },
      {
        path: 'calendar/:title',
        component: StandardLayoutPage
      },
      {
        path: 'missions',
        loadChildren: () => import('./missions/missions.module').then(m => m.MissionsPageModule)
      },
      {
        path: 'businesses-we-support',
        loadChildren: () => import('./businesses-we-support/businesses-we-support.module').then(m => m.BusinessesWeSupportPageModule)
      },
      {
        path: 'series/:title',
        component: SeriesListPage
      },
      {
        path: 'series/:title/:title',
        component: VideoPage
      },
      {
        path: 'faith-statement',
        component: FaithStatementPage
      },
      {
        path: 'our-church',
        loadChildren: () => import('./our-church/our-church.module').then( m => m.OurChurchPageModule)
      },
      {
        path: 'directions',
        loadChildren: () => import('./directions/directions.module').then( m => m.DirectionsPageModule)
      },
      {
        path: 'prayer',
        loadChildren: () => import('./prayer/prayer.module').then( m => m.PrayerPageModule)
      },
      {
        path: '**',
        component: HomePage
      }
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
