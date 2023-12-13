import {WaysToEngageModel} from "./ways-to-engage.model";

export interface HomePageModel {
  videoUrl: string;
  serviceTimesTitle: string;
  serviceTimes: string;
  whoWeAreTitle: string;
  whoWeAreDescription: string;
  whoWeAreImageUrl: string;
  newHereTitle: string;
  newHereDescription: string;
  newHereImageUrl: string;
  appTitle: string;
  appDescription: string;
  appImages: string[];
  waysToEngage: WaysToEngageModel[];
}
