import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {BusinessesWeSupportPageRoutingModule} from './businesses-we-support-routing.module';

import {BusinessesWeSupportPage} from './businesses-we-support.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
    imports: [
        IonicModule,
        BusinessesWeSupportPageRoutingModule,
        SharedComponentsModule,
        NgOptimizedImage
    ],
  declarations: [BusinessesWeSupportPage]
})
export class BusinessesWeSupportPageModule {}
