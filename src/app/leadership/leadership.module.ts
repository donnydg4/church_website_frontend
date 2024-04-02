import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {LeadershipPageRoutingModule} from './leadership-routing.module';

import {LeadershipPage} from './leadership.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
    imports: [
        IonicModule,
        LeadershipPageRoutingModule,
        SharedComponentsModule,
        NgOptimizedImage
    ],
    exports: [
        LeadershipPage
    ],
    declarations: [LeadershipPage]
})
export class LeadershipPageModule {}
