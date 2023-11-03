import {CalendarModel} from "./sub-models/calendar.model";
import {MainEventModel} from "./sub-models/main-event-model";
import {WatchModel} from "./sub-models/watch.model";
import {SeriesCardModel} from "./sub-models/series-card.model";
import {SomeChurchWebsiteInformation} from "./sub-models/some-church-website-information";
import {DisplayCardModel} from "./sub-models/display-card.model";
import {MinistriesWeSupportModel} from "./sub-models/ministries-we-support.model";
import {OurMinistriesModel} from "./sub-models/our-ministries.model";
import {LeadershipModel} from "./sub-models/leadership.model";

export interface AllWebsiteInformationModel {
  id: string;
  allWebsiteInformation: SomeChurchWebsiteInformation;
  // displayCards: DisplayCardModel[];
  leadershipPage: LeadershipModel;
  ourMinistriesPage: OurMinistriesModel;
  ministriesWeSupportPage: MinistriesWeSupportModel;
  allCalendarInformation: CalendarModel[];
  mainEvents: MainEventModel[];
  allWatchCards: WatchModel[];
  allSeriesCards: SeriesCardModel[];
}
