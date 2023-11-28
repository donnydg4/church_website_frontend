import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaithStatementPageRoutingModule } from './faith-statement-routing.module';

import { FaithStatementPage } from './faith-statement.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FaithStatementPageRoutingModule,
        SharedComponentsModule,
        MatExpansionModule
    ],
  declarations: [FaithStatementPage]
})
export class FaithStatementPageModule {}
