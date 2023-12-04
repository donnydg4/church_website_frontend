import {Component} from '@angular/core';
import {NavController} from "@ionic/angular";
import {CalendarEvent} from "../models/sub-models/calendar-events.model";

@Component({
  selector: 'app-standard-layout',
  templateUrl: './standard-layout.page.html',
  styleUrls: ['./standard-layout.page.scss'],
})
export class StandardLayoutPage {

  calendarEvent: CalendarEvent;

  constructor(private navCtrl: NavController) {
    this.calendarEvent = JSON.parse(localStorage.getItem('calendar'));
    console.log(this.calendarEvent);
  }

  back() {
    this.navCtrl.back();
  }

}
