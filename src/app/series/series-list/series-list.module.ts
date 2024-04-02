import {NgModule} from '@angular/core';
import {CommonModule, DatePipe, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SeriesListPageRoutingModule} from './series-list-routing.module';

import {SeriesListPage} from './series-list.page';
import {SharedComponentsModule} from "../../shared-components/shared-components.module";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  imports: [
    IonicModule,
    SeriesListPageRoutingModule,
    SharedComponentsModule,
    NgxPaginationModule,
    NgOptimizedImage,
    DatePipe
  ],
  declarations: [SeriesListPage]
})
export class SeriesListPageModule {}
