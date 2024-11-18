import {NgModule} from '@angular/core';

import {IonicModule} from '@ionic/angular';

import {SeriesPageRoutingModule} from './series-routing.module';

import {SeriesPage} from './series.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
    imports: [
        IonicModule,
        SeriesPageRoutingModule,
        SharedComponentsModule,
        SeriesPage
    ]
})
export class SeriesPageModule {
}
