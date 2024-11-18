import {NgModule} from '@angular/core';

import {IonicModule} from '@ionic/angular';

import {SermonsPageRoutingModule} from './sermons-routing.module';
import {SermonsPage} from './sermons.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
    imports: [
        IonicModule,
        SermonsPageRoutingModule,
        SharedComponentsModule,
        SermonsPage,
    ]
})
export class SermonsPageModule {
}
