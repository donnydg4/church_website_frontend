import {NgModule} from '@angular/core';
import {DatePipe, NgOptimizedImage} from '@angular/common';
import {AllEventsPageRoutingModule} from './all-events-routing.module';
import {AllEventsPage} from './all-events.page';
import {EventComponent} from "./event/event.component";
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
    imports: [
        AllEventsPageRoutingModule,
        SharedComponentsModule,
        NgOptimizedImage,
        DatePipe,
        AllEventsPage, EventComponent
    ],
    exports: [
        EventComponent,
        AllEventsPage
    ]
})
export class AllEventsPageModule {}
