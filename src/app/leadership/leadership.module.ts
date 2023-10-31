import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {LeadershipPageRoutingModule} from './leadership-routing.module';

import {LeadershipPage} from './leadership.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LeadershipPageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [LeadershipPage]
})
export class LeadershipPageModule {}
