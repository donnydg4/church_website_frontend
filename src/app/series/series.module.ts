import {NgModule} from '@angular/core';



import {SeriesPageRoutingModule} from './series-routing.module';

import {SeriesPage} from './series.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
    imports: [
        SeriesPageRoutingModule,
        SharedComponentsModule,
        SeriesPage
    ]
})
export class SeriesPageModule {
}
