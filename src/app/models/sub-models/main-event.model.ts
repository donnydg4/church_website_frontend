import {CalendarEvent} from "./calendar-events.model";

export interface MainEventModel {
  coverPhoto?: string;
  title?: string;
  events: CalendarEvent[];
}
