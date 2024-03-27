import {Component, inject} from '@angular/core';
import {NavController} from "@ionic/angular";
import {CalendarEvent} from "../models/sub-models/calendar-events.model";

@Component({
  selector: 'app-standard-layout',
  templateUrl: './standard-layout.page.html',
  styleUrls: ['./standard-layout.page.scss'],
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
