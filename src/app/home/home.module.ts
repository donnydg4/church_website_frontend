import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

import {HomePage} from './home.page';

import {HomePageRoutingModule} from './home-routing.module';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {SharedComponentsModule} from "../shared-components/shared-components.module";
import {AllEventsPageModule} from "../all-events/all-events.module";
import {SwiperDirective} from "../swiper.directive";


@NgModule({
    imports: [
        HomePageRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        SharedComponentsModule,
        AllEventsPageModule,
        SwiperDirective,
        NgOptimizedImage,
        HomePage
    ],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {
}
