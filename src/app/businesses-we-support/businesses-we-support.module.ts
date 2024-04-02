import {NgModule} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

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
