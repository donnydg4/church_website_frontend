import {NgModule} from '@angular/core';
import {DatePipe, NgOptimizedImage} from '@angular/common';


import {SeriesListPageRoutingModule} from './series-list-routing.module';

import {SeriesListPage} from './series-list.page';
import {SharedComponentsModule} from "../../shared-components/shared-components.module";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
    imports: [
        SeriesListPageRoutingModule,
        SharedComponentsModule,
        NgxPaginationModule,
        NgOptimizedImage,
        DatePipe,
        SeriesListPage
    ]
})
export class SeriesListPageModule {}
