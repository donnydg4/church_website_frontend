import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {StandardLayoutPageRoutingModule} from './standard-layout-routing.module';

import {StandardLayoutPage} from './standard-layout.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StandardLayoutPageRoutingModule,
        SharedComponentsModule
    ],
  declarations: [StandardLayoutPage]
})
export class StandardLayoutPageModule {}
