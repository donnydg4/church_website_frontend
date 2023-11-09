import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AllWatchComponent} from "./all-watch/all-watch.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {NgxPaginationModule} from "ngx-pagination";
import {DisplayCardsComponent} from "./display-cards/display-cards.component";
import {DefaultLayoutComponent} from "./default-layout/default-layout.component";


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
    HeaderComponent,
    FooterComponent,
    AllWatchComponent,
    DisplayCardsComponent,
    DefaultLayoutComponent
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    AllWatchComponent,
    DisplayCardsComponent,
    DefaultLayoutComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedComponentsModule {
}
