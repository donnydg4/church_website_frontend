import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorshipPageRoutingModule } from './worship-routing.module';

import { WorshipPage } from './worship.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WorshipPageRoutingModule,
        NgOptimizedImage
    ],
  declarations: [WorshipPage]
})
export class WorshipPageModule {}
