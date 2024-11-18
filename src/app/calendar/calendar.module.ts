import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CalendarPageRoutingModule} from './calendar-routing.module';
import {CalendarPage} from './calendar.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalendarPageRoutingModule,
    SharedComponentsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    CalendarPage
  ]
})
export class CalendarPageModule {
}
