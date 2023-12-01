import {CalendarModel} from "./sub-models/calendar.model";
import {MainEventModel} from "./sub-models/main-event.model";
import {WatchModel} from "./sub-models/watch.model";
import {SeriesCardModel} from "./sub-models/series-card.model";
import {SomeChurchWebsiteInformationModel} from "./sub-models/some-church-website-information.model";
import {MinistriesWeSupportModel} from "./sub-models/ministries-we-support.model";
import {OurMinistriesModel} from "./sub-models/our-ministries.model";
import {LeadershipModel} from "./sub-models/leadership.model";
import {BusinessesWeSupportModel} from "./sub-models/businesses-we-support.model";
import {MissionsModel} from "./sub-models/missions.model";
import {StatementOfFaithModel} from "./sub-models/statement-of-faith.model";
import {CalendarEvent} from "./sub-models/calendar-events.model";

export interface AllWebsiteInformationModel {
  id: string;
  allWebsiteInformation: SomeChurchWebsiteInformationModel;
  leadershipPage: LeadershipModel;
  ourMinistriesPage: OurMinistriesModel;
  ministriesWeSupportPage: MinistriesWeSupportModel;
  businessesWeSupportPage: BusinessesWeSupportModel;
  missionsPage: MissionsModel;
  allCalendarInformation: CalendarModel[];
  mainEvents: CalendarEvent[];
  allWatchCards: WatchModel[];
  allSeriesCards: SeriesCardModel[];
  statementOfFaith: StatementOfFaithModel;
}
