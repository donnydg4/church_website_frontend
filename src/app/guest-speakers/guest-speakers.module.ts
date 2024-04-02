import {NgModule} from '@angular/core';

import {IonicModule} from '@ionic/angular';

import {GuestSpeakersPageRoutingModule} from './guest-speakers-routing.module';

import {GuestSpeakersPage} from './guest-speakers.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
  imports: [
    IonicModule,
    GuestSpeakersPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [GuestSpeakersPage]
})
export class GuestSpeakersPageModule {
}
