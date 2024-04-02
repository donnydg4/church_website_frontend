import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MissionsPageRoutingModule} from './missions-routing.module';

import {MissionsPage} from './missions.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
    imports: [
        IonicModule,
        MissionsPageRoutingModule,
        SharedComponentsModule,
        NgOptimizedImage
    ],
  declarations: [MissionsPage]
})
export class MissionsPageModule {}
