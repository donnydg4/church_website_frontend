import {enableProdMode, importProvidersFrom} from '@angular/core';


import {environment} from './environments/environment';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app/app-routing.module';
import {provideAnimations} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {HomePageModule} from './app/home/home.module';
import {SharedComponentsModule} from './app/shared-components/shared-components.module';
import {CalendarPageModule} from './app/calendar/calendar.module';
import {DevotionalsPageModule} from './app/devotionals/devotionals.module';
import {SermonsPageModule} from './app/sermons/sermons.module';
import {SeriesPageModule} from './app/series/series.module';
import {GuestSpeakersPageModule} from './app/guest-speakers/guest-speakers.module';
import {ConnectPageModule} from './app/connect/connect.module';
import {AllEventsPageModule} from './app/all-events/all-events.module';
import {OurMinistriesPageModule} from './app/our-ministries/our-ministries.module';
import {MinistriesWeSupportPageModule} from './app/ministries-we-support/ministries-we-support.module';
import {LeadershipPageModule} from './app/leadership/leadership.module';
import {SeriesListPageModule} from './app/series/series-list/series-list.module';
import {VideoPageModule} from './app/shared-components/video/video.module';
import {FaithStatementPageModule} from './app/faith-statement/faith-statement.module';
import {WorshipPageModule} from './app/worship/worship.module';
import {SozoPageModule} from './app/sozo/sozo.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {AppComponent} from './app/app.component';
import {provideIonicAngular} from "@ionic/angular/standalone";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      MatToolbarModule,
      MatButtonModule,
      MatMenuModule,
      HomePageModule,
      SharedComponentsModule,
      CalendarPageModule,
      DevotionalsPageModule,
      SermonsPageModule,
      SeriesPageModule,
      GuestSpeakersPageModule,
      ConnectPageModule,
      AllEventsPageModule,
      OurMinistriesPageModule,
      MinistriesWeSupportPageModule,
      LeadershipPageModule,
      SeriesListPageModule,
      VideoPageModule,
      FaithStatementPageModule,
      WorshipPageModule,
      SozoPageModule,
      NgxPaginationModule,
      MatSnackBarModule),
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    provideHttpClient(withInterceptorsFromDi()),
    provideIonicAngular(),
    provideAnimations()
  ]
})
  .catch(err => console.log(err));
