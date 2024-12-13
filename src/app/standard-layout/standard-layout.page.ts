import {Component, inject} from '@angular/core';
import {CalendarEvent} from "../models/sub-models/calendar-events.model";
import {DatePipe, NgOptimizedImage} from '@angular/common';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {IonCol, IonContent, IonGrid, IonIcon, IonRow, IonText, NavController} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {arrowBackOutline} from "ionicons/icons";

@Component({
  selector: 'app-standard-layout',
  templateUrl: './standard-layout.page.html',
  styleUrls: ['./standard-layout.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonGrid, IonRow, IonCol, IonText, IonIcon,
    NgOptimizedImage,
    FooterComponent,
    DatePipe,
  ]
})
export class StandardLayoutPage {

  private navCtrl = inject(NavController);

  calendarEvent: CalendarEvent;

  constructor() {
    addIcons({ arrowBackOutline });
    this.calendarEvent = JSON.parse(localStorage.getItem('calendar'));
  }

  back() {
    this.navCtrl.back();
  }

}
