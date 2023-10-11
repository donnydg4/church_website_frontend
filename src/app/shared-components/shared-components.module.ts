import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AllWatchComponent} from "./all-watch/all-watch.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {NgxPaginationModule} from "ngx-pagination";
import {DisplayCardsComponent} from "./display-cards/display-cards.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {VideoComponent} from "./video/video.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    IonicModule,
    MatToolbarModule,
    MatPaginatorModule,
    NgxPaginationModule,
  ],
  exports: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    AllWatchComponent,
    DisplayCardsComponent,
    VideoComponent
  ],
  declarations: [
    MainLayoutComponent,
    FooterComponent,
    HeaderComponent,
    AllWatchComponent,
    DisplayCardsComponent,
    VideoComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedComponentsModule {
}
