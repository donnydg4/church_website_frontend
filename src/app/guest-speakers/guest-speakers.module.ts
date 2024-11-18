import {NgModule} from '@angular/core';



import {GuestSpeakersPageRoutingModule} from './guest-speakers-routing.module';

import {GuestSpeakersPage} from './guest-speakers.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
    imports: [
        GuestSpeakersPageRoutingModule,
        SharedComponentsModule,
        GuestSpeakersPage
    ]
})
export class GuestSpeakersPageModule {
}
