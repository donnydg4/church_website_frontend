import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {OurChurchPageRoutingModule} from './our-church-routing.module';

import {OurChurchPage} from './our-church.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurChurchPageRoutingModule,
    SharedComponentsModule,
    NgOptimizedImage,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  declarations: [OurChurchPage]
})
export class OurChurchPageModule {}
