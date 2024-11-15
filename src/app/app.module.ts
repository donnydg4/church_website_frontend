import {CUSTOM_ELEMENTS_SCHEMA, NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {HomePageModule} from "./home/home.module";
import {SharedComponentsModule} from "./shared-components/shared-components.module";
import {CalendarPageModule} from "./calendar/calendar.module";
import {SermonsPageModule} from "./sermons/sermons.module";
import {DevotionalsPageModule} from "./devotionals/devotionals.module";
import {SeriesPageModule} from "./series/series.module";
import {GuestSpeakersPageModule} from "./guest-speakers/guest-speakers.module";
import {NgxPaginationModule} from "ngx-pagination";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {ConnectPageModule} from "./connect/connect.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {AllEventsPageModule} from "./all-events/all-events.module";
import {OurMinistriesPageModule} from "./our-ministries/our-ministries.module";
import {MinistriesWeSupportPageModule} from "./ministries-we-support/ministries-we-support.module";
import {LeadershipPageModule} from "./leadership/leadership.module";
import {SeriesListPageModule} from "./series/series-list/series-list.module";
import {VideoPageModule} from "./shared-components/video/video.module";
import {FaithStatementPageModule} from "./faith-statement/faith-statement.module";
import {WorshipPageModule} from "./worship/worship.module";
import {SozoPageModule} from "./sozo/sozo.module";

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
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
    MatSnackBarModule
  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule {
}
