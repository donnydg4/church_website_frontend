import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoPageRoutingModule } from './video-routing.module';

import { VideoPage } from './video.page';
import {SharedComponentsModule} from "../shared-components.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        VideoPageRoutingModule,
        SharedComponentsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
  declarations: [VideoPage]
})
export class VideoPageModule {}
