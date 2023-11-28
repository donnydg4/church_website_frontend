import {WatchModel} from "../models/sub-models/watch.model";
import {SeriesCardModel} from "../models/sub-models/series-card.model";
import {CalendarModel} from "../models/sub-models/calendar.model";
import {MainEventModel} from "../models/sub-models/main-event.model";
import {DisplayCardModel} from "../models/sub-models/display-card.model";
import {Category} from "../models/sub-models/categories.model";

export function sortByDate(a: WatchModel, b: WatchModel) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export function sortByDateSeries(a: SeriesCardModel, b: SeriesCardModel) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export function sortByDateCalendar(a: CalendarModel, b: CalendarModel) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}

export function sortByDateEvents(a: MainEventModel, b: MainEventModel) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}

export function sortByDateDisplay(a: DisplayCardModel, b: DisplayCardModel) {
  return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
}

export function sortByCardCategory(a: DisplayCardModel, b: DisplayCardModel) {
  if (a.category === b.category) return 0;
  return CategorySortOrder[a.category] > CategorySortOrder[b.category] ? 1 : -1;
}

export const CategorySortOrder: Record<Category, number> = {
  'ONGOING': 0,
  'UPCOMING': 1,
  'PAST': 2
}
export function checkIfVideoUrl(videoUrl: string): boolean {
  let booleanReturn: boolean = videoUrl.includes(".mp4");
  return booleanReturn;
}

export function convertSpaceToDash(title: string): string {
  let re = /\ /gi;
  let result = title.toLowerCase().replace(re, "-");
  return result;
}

