import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

import {IonicModule} from '@ionic/angular';

import {OurMinistriesPageRoutingModule} from './our-ministries-routing.module';

import {OurMinistriesPage} from './our-ministries.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
    imports: [
        IonicModule,
        OurMinistriesPageRoutingModule,
        SharedComponentsModule,
        NgOptimizedImage,
        OurMinistriesPage
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OurMinistriesPageModule {}
