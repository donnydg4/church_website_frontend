import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidsMinistryPageRoutingModule } from './kids-ministry-routing.module';

import { KidsMinistryPage } from './kids-ministry.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KidsMinistryPageRoutingModule,
        KidsMinistryPage
    ]
})
export class KidsMinistryPageModule {}
