import {NgModule} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';



import {DirectionsPageRoutingModule} from './directions-routing.module';

import {DirectionsPage} from './directions.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
    imports: [
        DirectionsPageRoutingModule,
        SharedComponentsModule,
        NgOptimizedImage,
        DirectionsPage
    ]
})
export class DirectionsPageModule {}
