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
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot({animated: false}), AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, MatButtonModule, MatMenuModule, HomePageModule, SharedComponentsModule, CalendarPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
