import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinistriesWeSupportPageRoutingModule } from './ministries-we-support-routing.module';

import { MinistriesWeSupportPage } from './ministries-we-support.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinistriesWeSupportPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [MinistriesWeSupportPage],
})
export class MinistriesWeSupportPageModule {}
