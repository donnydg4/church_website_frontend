import {Component, input} from '@angular/core';
import {convertSpaceToDash,} from "../../utils/utils";
import {ExtrasService} from "../../service/extras.service";
import {Router} from "@angular/router";
import {CalendarEvent} from "../../models/sub-models/calendar-events.model";
import {DatePipe, NgOptimizedImage} from '@angular/common';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonRow
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage,
    DatePipe,
    IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent
  ]
})
export class EventComponent {

  readonly eventsArray = input<CalendarEvent[]>(undefined);

  constructor(private navExtras: ExtrasService, private router: Router) {
  }

  takeToStandardLayout(event: CalendarEvent) {
    this.navExtras.setCalendarEvent(event);
    localStorage.setItem('calendar', JSON.stringify(this.navExtras.getCalendarEvents()));
    this.router.navigate(['/events', convertSpaceToDash(event.title)]);
  }

}
