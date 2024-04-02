import {NgModule} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

import {IonicModule} from '@ionic/angular';

import {DirectionsPageRoutingModule} from './directions-routing.module';

import {DirectionsPage} from './directions.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
    imports: [
        IonicModule,
        DirectionsPageRoutingModule,
        SharedComponentsModule,
        NgOptimizedImage
    ],
  declarations: [DirectionsPage]
})
export class DirectionsPageModule {}
