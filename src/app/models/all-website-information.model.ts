import {CalendarModel} from "./sub-models/calendar.model";
import {DisplayCardModel} from "./sub-models/display-card.model";
import {MainEventModel} from "./sub-models/main-event-model";
import {WatchModel} from "./sub-models/watch.model";
import {SeriesCardModel} from "./sub-models/series-card.model";
import {SomeChurchWebsiteInformation} from "./sub-models/some-church-website-information";

export interface AllWebsiteInformationModel {
  id: string;
  allWebsiteInformation: SomeChurchWebsiteInformation;
  displayCards: DisplayCardModel[];
  allCalendarInformation: CalendarModel[];
  mainEvents: MainEventModel[];
  allWatchCards: WatchModel[];
  allSeriesCards: SeriesCardModel[];
}
