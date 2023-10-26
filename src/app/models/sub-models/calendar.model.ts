import {CalendarEvents} from "./calendar-events.model";

export interface CalendarModel {
  date: Date;
  events: CalendarEvents[];
}
