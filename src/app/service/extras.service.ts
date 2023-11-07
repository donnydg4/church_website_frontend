import {Injectable} from '@angular/core';
import {WatchModel} from "../models/sub-models/watch.model";
import {SeriesCardModel} from "../models/sub-models/series-card.model";
import {CalendarEvent} from "../models/sub-models/calendar-events.model";

@Injectable({
  providedIn: 'root'
})
export class ExtrasService {

  anyCard: WatchModel;
  anyCardArray: WatchModel[];
  seriesCard: SeriesCardModel;
  calendarEvents: CalendarEvent;

  series: boolean;

  constructor() { }

  public setWatchCard(data: WatchModel) {
    this.anyCard = data;
  }

  public getExtras() {
    return this.anyCard;
  }

  public setCalendarEvent(data: CalendarEvent) {
    this.calendarEvents = data;
  }

  public getCalendarEvents() {
    return this.calendarEvents;
  }

  public setExtrasSeries(data: SeriesCardModel){
    this.seriesCard = data;
  }

  public setExtrasArray(data: WatchModel[]){
    this.anyCardArray = data;
  }

  public setSeries(series: boolean) {
    this.series = series;
  }

  public getExtrasArray() {
    return [...this.anyCardArray];
  }

  public getExtrasSeries() {
    return this.seriesCard;
  }


  public getSeries() {
    return this.series;
  }
}
