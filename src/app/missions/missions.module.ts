import {NgModule} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';


import {MissionsPageRoutingModule} from './missions-routing.module';

import {MissionsPage} from './missions.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
    imports: [
        MissionsPageRoutingModule,
        SharedComponentsModule,
        NgOptimizedImage,
        MissionsPage
    ]
})
export class MissionsPageModule {}
