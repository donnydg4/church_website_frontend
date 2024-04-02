import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {FaithStatementPageRoutingModule} from './faith-statement-routing.module';

import {FaithStatementPage} from './faith-statement.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
    imports: [
        IonicModule,
        FaithStatementPageRoutingModule,
        SharedComponentsModule,
        MatExpansionModule,
        NgOptimizedImage
    ],
  declarations: [FaithStatementPage]
})
export class FaithStatementPageModule {}
