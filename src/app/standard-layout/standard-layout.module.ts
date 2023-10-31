import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {StandardLayoutPageRoutingModule} from './standard-layout-routing.module';

import {StandardLayoutPage} from './standard-layout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StandardLayoutPageRoutingModule
  ],
  declarations: [StandardLayoutPage]
})
export class StandardLayoutPageModule {}
