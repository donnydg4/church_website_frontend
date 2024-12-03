import {Component, inject} from '@angular/core';
import {CalendarEvent} from "../models/sub-models/calendar-events.model";
import {DatePipe, NgOptimizedImage} from '@angular/common';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonRow,
  IonText,
  NavController
} from "@ionic/angular/standalone";

@Component({
    selector: 'app-standard-layout',
    templateUrl: './standard-layout.page.html',
    styleUrls: ['./standard-layout.page.scss'],
    imports: [
        IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader,
        IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonText, IonIcon,
        NgOptimizedImage,
        FooterComponent,
        DatePipe,
    ]
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
