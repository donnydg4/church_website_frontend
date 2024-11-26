import {NgModule} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';


import {MinistriesWeSupportPageRoutingModule} from './ministries-we-support-routing.module';

import {MinistriesWeSupportPage} from './ministries-we-support.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";


@NgModule({
    imports: [
        MinistriesWeSupportPageRoutingModule,
        SharedComponentsModule,
        NgOptimizedImage,
        MinistriesWeSupportPage
    ],
})
export class MinistriesWeSupportPageModule {}
