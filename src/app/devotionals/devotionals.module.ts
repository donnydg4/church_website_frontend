import {NgModule} from '@angular/core';

import {DevotionalsPageRoutingModule} from './devotionals-routing.module';
import {DevotionalsPage} from './devotionals.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
    imports: [
        DevotionalsPageRoutingModule,
        SharedComponentsModule,
        DevotionalsPage
    ]
})
export class DevotionalsPageModule {
}
