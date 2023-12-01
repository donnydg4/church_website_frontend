import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectionsPageRoutingModule } from './directions-routing.module';

import { DirectionsPage } from './directions.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DirectionsPageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [DirectionsPage]
})
export class DirectionsPageModule {}
