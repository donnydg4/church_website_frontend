import {HomePageModel} from "./home-page";
import {OurChurch} from "./our-church";
import {ServiceInfo} from "./service-info";
import {PrayerInfo} from "./prayer-info";

export interface SomeChurchWebsiteInformation {
  homePage: HomePageModel;
  ourChurch: OurChurch;
  serviceInfo: ServiceInfo;
  prayerInfo: PrayerInfo;
}
