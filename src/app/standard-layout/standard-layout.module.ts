import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {StandardLayoutPageRoutingModule} from './standard-layout-routing.module';
import {StandardLayoutPage} from './standard-layout.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StandardLayoutPageRoutingModule,
    SharedComponentsModule,
    NgOptimizedImage,
    StandardLayoutPage
  ]
})
export class StandardLayoutPageModule {
}
