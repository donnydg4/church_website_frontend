import {WatchModel} from "../models/watch.model";
import {SeriesCardModel} from "../models/series-card.model";
import {CalendarModel} from "../models/calendar.model";

export function sortByDate(a: WatchModel, b: WatchModel) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export function sortByDateSeries(a: SeriesCardModel, b: SeriesCardModel) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export function sortByDateCalendar(a: CalendarModel, b: CalendarModel) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}
