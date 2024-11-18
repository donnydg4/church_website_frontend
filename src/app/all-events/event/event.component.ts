import {Component, Input} from '@angular/core';
import {convertSpaceToDash,} from "../../utils/utils";
import {ExtrasService} from "../../service/extras.service";
import {Router} from "@angular/router";
import {CalendarEvent} from "../../models/sub-models/calendar-events.model";
import { IonicModule } from '@ionic/angular';
import { NgOptimizedImage, DatePipe } from '@angular/common';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgOptimizedImage,
        DatePipe,
    ],
})
export class EventComponent {

  @Input()
  eventsArray: CalendarEvent[];

  constructor(private navExtras: ExtrasService, private router: Router) { }

  takeToStandardLayout(event: CalendarEvent) {
    this.navExtras.setCalendarEvent(event);
    localStorage.setItem('calendar', JSON.stringify(this.navExtras.getCalendarEvents()));
    this.router.navigate(['/events', convertSpaceToDash(event.title)]);
  }

}
