import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {CalendarPageRoutingModule} from './calendar-routing.module';
import {CalendarPage} from './calendar.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}
