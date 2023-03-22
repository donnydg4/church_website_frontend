import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SeriesPageRoutingModule} from './series-routing.module';

import {SeriesPage} from './series.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeriesPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [SeriesPage]
})
export class SeriesPageModule {
}
