import {WatchModel} from "../models/sub-models/watch.model";
import {SeriesCardModel} from "../models/sub-models/series-card.model";
import {CalendarModel} from "../models/sub-models/calendar.model";
import {DisplayCardModel} from "../models/sub-models/display-card.model";
import {Category} from "../models/sub-models/categories.model";
import {IndividualHistoryModel} from "../models/sub-models/individual-history.model";
import {CalendarEvent} from "../models/sub-models/calendar-events.model";
import {HttpErrorResponse} from "@angular/common/http";
import {ErrorModel} from "../models/sub-models/error.model";

export function sortByDate(a: WatchModel, b: WatchModel) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export function sortByDateEvent(a: CalendarEvent, b: CalendarEvent) {
  return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
}

export function sortByDateSeries(a: SeriesCardModel, b: SeriesCardModel) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export function sortByDateCalendar(a: CalendarModel, b: CalendarModel) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}

export function sortByDateDisplay(a: DisplayCardModel, b: DisplayCardModel) {
  return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
}

export function sortByDateHistory(a: IndividualHistoryModel, b: IndividualHistoryModel) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
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

export function setErrorMessage(err: HttpErrorResponse, dataName?: string): ErrorModel {
  let errorModel: ErrorModel = {
    description: '',
    status: 0,
    statusText: ''
  }
  if (err) {
    if (err.error instanceof ErrorEvent) {
      //client side or network error
      errorModel.status = err.status;
      errorModel.statusText = err.statusText;
      errorModel.description = err.message;
    } else {
      errorModel.status = err.status;
      errorModel.statusText = err.statusText;
      errorModel.description = err.message;
    }
    return errorModel;
  }
}

