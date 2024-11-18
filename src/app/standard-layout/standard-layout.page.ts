import {Component, inject} from '@angular/core';
import { NavController, IonicModule } from "@ionic/angular";
import {CalendarEvent} from "../models/sub-models/calendar-events.model";
import { NgOptimizedImage, DatePipe } from '@angular/common';
import { FooterComponent } from '../shared-components/footer/footer.component';

@Component({
    selector: 'app-standard-layout',
    templateUrl: './standard-layout.page.html',
    styleUrls: ['./standard-layout.page.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgOptimizedImage,
        FooterComponent,
        DatePipe,
    ],
})
export class StandardLayoutPage {

  private navCtrl = inject(NavController);

  calendarEvent: CalendarEvent;

  constructor() {
    this.calendarEvent = JSON.parse(localStorage.getItem('calendar'));
  }

  back() {
    this.navCtrl.back();
  }

}
