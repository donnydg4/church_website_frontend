import {NgModule} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

import {IonicModule} from '@ionic/angular';

import {LeadershipPageRoutingModule} from './leadership-routing.module';

import {LeadershipPage} from './leadership.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
    imports: [
        IonicModule,
        LeadershipPageRoutingModule,
        SharedComponentsModule,
        NgOptimizedImage,
        LeadershipPage
    ],
    exports: [
        LeadershipPage
    ]
})
export class LeadershipPageModule {}
