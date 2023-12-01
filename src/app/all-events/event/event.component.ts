import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {MainEventModel} from "../../models/sub-models/main-event.model";
import {convertSpaceToDash} from "../../utils/utils";
import {ExtrasService} from "../../service/extras.service";
import {Router} from "@angular/router";
import {CalendarEvent} from "../../models/sub-models/calendar-events.model";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent {

  @Input() eventsArray: Observable<CalendarEvent[]>;
  @Input() selectedCategory: string = '';

  constructor(private navExtras: ExtrasService, private router: Router) { }

  takeToStandardLayout(event: CalendarEvent) {
    this.navExtras.setCalendarEvent(event);
    localStorage.setItem('calendar', JSON.stringify(this.navExtras.getCalendarEvents()));
    this.router.navigate(['/events', convertSpaceToDash(event.title)]);
  }


}
