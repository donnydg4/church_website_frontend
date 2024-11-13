import {WaysToEngageModel} from "./ways-to-engage.model";
import {Emergency} from "./emergency.model";

export interface HomePageModel {
  homePageTitle: string;
  emergency: Emergency;
  videoUrl: string;
  serviceTimesTitle: string;
  serviceTimes: string;
  whoWeAreTitle: string;
  whoWeAreDescription: string;
  whoWeAreImageUrl: string;
  newHereTitle: string;
  newHereDescription: string;
  newHereImageUrl: string;
  waysToEngage: WaysToEngageModel[];
  establishedImg: string;
}
