import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {VideoPageRoutingModule} from './video-routing.module';

import {VideoPage} from './video.page';
import {SharedComponentsModule} from "../shared-components.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VideoPageRoutingModule,
    SharedComponentsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    VideoPage
  ]
})
export class VideoPageModule {
}
