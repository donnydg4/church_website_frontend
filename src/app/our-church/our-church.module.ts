import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {OurChurchPageRoutingModule} from './our-church-routing.module';

import {OurChurchPage} from './our-church.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurChurchPageRoutingModule,
    SharedComponentsModule,
    NgOptimizedImage,
    MatToolbarModule,
  ],
  declarations: [OurChurchPage]
})
export class OurChurchPageModule {}
