import {Injectable} from '@angular/core';
import {WatchModel} from "../models/sub-models/watch.model";
import {SeriesCardModel} from "../models/sub-models/series-card.model";
import {CalendarEvent} from "../models/sub-models/calendar-events.model";

@Injectable({
  providedIn: 'root'
})
export class ExtrasService {

  sermonOrDevotionalOrGuestSpeakerCard: WatchModel;
  seriesCard: SeriesCardModel;
  calendarEvents: CalendarEvent;
  arrayOfWatchCards: WatchModel[];

  series: boolean;

  constructor() { }

  public setSermonOrDevotionalOrGuestSpeakerCard(data: WatchModel) {
    this.sermonOrDevotionalOrGuestSpeakerCard = data;
  }

  public getSermonOrDevotionalOrGuestSpeakerCard() {
    return this.sermonOrDevotionalOrGuestSpeakerCard;
  }

  public setCalendarEvent(data: CalendarEvent) {
    this.calendarEvents = data;
  }

  public getCalendarEvents() {
    return this.calendarEvents;
  }

  public setSeriesCard(data: SeriesCardModel){
    this.seriesCard = data;
  }

  public getSeriesCard() {
    return this.seriesCard;
  }

  public getArrayOfWatchCards() {
    return [...this.arrayOfWatchCards];
  }

  public setArrayOfWatchCards(cards: WatchModel[]) {
    this.arrayOfWatchCards = cards;
  }

}
