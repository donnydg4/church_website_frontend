import {Component, computed, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {CalendarEvent} from "../models/sub-models/calendar-events.model";
import {CalendarModel} from "../models/sub-models/calendar.model";
import {sortByDateEvent} from "../utils/utils";

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.page.html',
  styleUrls: ['./all-events.page.scss'],
})
export class AllEventsPage {

  private dataService = inject(AllChurchInformationService);

  //TODO: Figure out how to mess with specific dates... Filter on the model date most likely
  getAllEvents = computed(() =>
    this.dataService.allChurchInformation()
      ?.allCalendarInformation
      ?.reduce((acc: CalendarEvent[], cur: CalendarModel) => [...acc, ...cur.events], [] as CalendarEvent[])
      .filter((event: CalendarEvent) =>
          event.type === 'event' &&
          event.featured === true &&
          event.startDate && new Date(event.startDate).getTime() >= new Date().setHours(0, 0, 0, 0))
      .sort(sortByDateEvent)
      );

  eventsInfo = computed(() => this.dataService.allChurchInformation()?.mainEvents);

}
