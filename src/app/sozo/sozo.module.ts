import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SozoPageRoutingModule} from './sozo-routing.module';
import {SozoPage} from './sozo.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SozoPageRoutingModule,
        NgOptimizedImage,
        SharedComponentsModule,
        SozoPage
    ]
})
export class SozoPageModule {}
