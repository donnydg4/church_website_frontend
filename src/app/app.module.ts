import {NgModule} from '@angular/core';
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
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ConnectPageModule} from "./connect/connect.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [AppComponent],
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
    NgxPaginationModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
