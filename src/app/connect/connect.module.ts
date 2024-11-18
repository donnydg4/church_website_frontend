import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ConnectPageRoutingModule} from './connect-routing.module';
import {ConnectPage} from './connect.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {StandardLayoutPageModule} from "../standard-layout/standard-layout.module";

@NgModule({
    imports: [
        FormsModule,
        IonicModule,
        ConnectPageRoutingModule,
        SharedComponentsModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatInputModule,
        StandardLayoutPageModule,
        ConnectPage
    ]
})
export class ConnectPageModule {
}
