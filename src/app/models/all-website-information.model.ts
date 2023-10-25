import {CalendarModel} from "./calendar.model";
import {DisplayCardModel} from "./display-card.model";
import {MainEventModel} from "./main-event-model";
import {WatchModel} from "./watch.model";
import {SeriesCardModel} from "./series-card.model";

export interface AllWebsiteInformationModel {
  allCalendarInformation: CalendarModel[];
  displayCards: DisplayCardModel[];
  mainEvents: MainEventModel[];
  allWatchCards: WatchModel[];
  allSeriesCards: SeriesCardModel[];
}
