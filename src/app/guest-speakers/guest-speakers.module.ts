import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {GuestSpeakersPageRoutingModule} from './guest-speakers-routing.module';

import {GuestSpeakersPage} from './guest-speakers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestSpeakersPageRoutingModule
  ],
  declarations: [GuestSpeakersPage]
})
export class GuestSpeakersPageModule {}
