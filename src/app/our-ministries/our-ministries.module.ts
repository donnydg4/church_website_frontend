import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurMinistriesPageRoutingModule } from './our-ministries-routing.module';

import { OurMinistriesPage } from './our-ministries.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurMinistriesPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [OurMinistriesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OurMinistriesPageModule {}
