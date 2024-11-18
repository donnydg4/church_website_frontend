import {NgModule} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';



import {OurChurchPageRoutingModule} from './our-church-routing.module';

import {OurChurchPage} from './our-church.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {LeadershipPageModule} from "../leadership/leadership.module";

@NgModule({
    imports: [
        OurChurchPageRoutingModule,
        SharedComponentsModule,
        NgOptimizedImage,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTabsModule,
        MatButtonToggleModule,
        LeadershipPageModule,
        OurChurchPage,
    ]
})
export class OurChurchPageModule {}
