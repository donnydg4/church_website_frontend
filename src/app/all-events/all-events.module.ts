import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AllEventsPageRoutingModule} from './all-events-routing.module';

import {AllEventsPage} from './all-events.page';
import {EventComponent} from "./event/event.component";
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
    imports: [
        IonicModule,
        AllEventsPageRoutingModule,
        SharedComponentsModule,
        NgOptimizedImage
    ],
    exports: [
        EventComponent,
        AllEventsPage
    ],
    declarations: [AllEventsPage, EventComponent]
})
export class AllEventsPageModule {}
