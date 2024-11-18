import {NgModule} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

import {IonicModule} from '@ionic/angular';

import {MinistriesWeSupportPageRoutingModule} from './ministries-we-support-routing.module';

import {MinistriesWeSupportPage} from './ministries-we-support.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";


@NgModule({
    imports: [
        IonicModule,
        MinistriesWeSupportPageRoutingModule,
        SharedComponentsModule,
        NgOptimizedImage,
        MinistriesWeSupportPage
    ],
})
export class MinistriesWeSupportPageModule {}
