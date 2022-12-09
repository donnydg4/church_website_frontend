import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AllWatchComponent} from "./all-watch/all-watch.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    IonicModule,
    MatToolbarModule,
  ],
  exports: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    AllWatchComponent
  ],
  declarations: [
    MainLayoutComponent,
    FooterComponent,
    HeaderComponent,
    AllWatchComponent
  ]
})
export class SharedComponentsModule {}
