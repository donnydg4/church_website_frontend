import {NgModule} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';


import {FaithStatementPageRoutingModule} from './faith-statement-routing.module';

import {FaithStatementPage} from './faith-statement.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
    imports: [
        FaithStatementPageRoutingModule,
        SharedComponentsModule,
        MatExpansionModule,
        NgOptimizedImage,
        FaithStatementPage
    ]
})
export class FaithStatementPageModule {}
