import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SermonsPageRoutingModule} from './sermons-routing.module';
import {SermonsPage} from './sermons.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
  imports: [
    IonicModule,
    SermonsPageRoutingModule,
    SharedComponentsModule,
  ],
  declarations: [SermonsPage]
})
export class SermonsPageModule {
}
