import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {StandardLayoutPage} from "./standard-layout/standard-layout.page";
import {DefaultLayoutComponent} from "./shared-components/default-layout/default-layout.component";
import {HomePage} from "./home/home.page";
import {SeriesListPage} from "./series/series-list/series-list.page";
import {VideoPage} from "./shared-components/video/video.page";

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
        loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
      },
      {
        path: 'sermons',
        loadChildren: () => import('./sermons/sermons.module').then( m => m.SermonsPageModule)
      },
      {
        path: 'devotionals',
        loadChildren: () => import('./devotionals/devotionals.module').then( m => m.DevotionalsPageModule)
      },
      {
        path: 'series',
        loadChildren: () => import('./series/series.module').then( m => m.SeriesPageModule)
      },
      {
        path: 'podcasts',
        loadChildren: () => import('./guest-speakers/guest-speakers.module').then( m => m.GuestSpeakersPageModule)
      },
      {
        path: 'connect',
        loadChildren: () => import('./connect/connect.module').then( m => m.ConnectPageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('./all-events/all-events.module').then( m => m.AllEventsPageModule)
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
        loadChildren: () => import('./ministries-we-support/ministries-we-support.module').then( m => m.MinistriesWeSupportPageModule)
      },
      {
        path: 'our-ministries',
        loadChildren: () => import('./our-ministries/our-ministries.module').then( m => m.OurMinistriesPageModule)
      },
      {
        path: 'leadership',
        loadChildren: () => import('./leadership/leadership.module').then( m => m.LeadershipPageModule)
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
        path: 'podcasts/:title',
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
        loadChildren: () => import('./faith-statement/faith-statement.module').then( m => m.FaithStatementPageModule)
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
        path: '**',
        component: HomePage
      }
    ]
  },
  {
    path: 'worship',
    loadChildren: () => import('./worship/worship.module').then( m => m.WorshipPageModule)
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
