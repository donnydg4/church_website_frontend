import {CalendarEvent} from "./calendar-events.model";

export interface CalendarModel {
  date: Date;
  events: CalendarEvent[];
}
