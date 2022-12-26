import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';

import {HomePageRoutingModule} from './home-routing.module';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {SharedComponentsModule} from "../shared-components/shared-components.module";

// import {FooterComponent} from "../shared-components/footer/footer.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    SharedComponentsModule,
  ],
  exports: [
    // HeaderComponent,
    // FooterComponent
  ],
  declarations: [HomePage]
//   , HeaderComponent, FooterComponent
})
export class HomePageModule {
}
