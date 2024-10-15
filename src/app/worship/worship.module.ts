import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorshipPageRoutingModule } from './worship-routing.module';

import { WorshipPage } from './worship.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";
import {MatSlider, MatSliderThumb} from "@angular/material/slider";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorshipPageRoutingModule,
    NgOptimizedImage,
    SharedComponentsModule,
    MatSlider,
    MatSliderThumb
  ],
  declarations: [WorshipPage]
})
export class WorshipPageModule {}
