import {HomePageModel} from "./home-page.model";
import {OurChurchModel} from "./our-church.model";
import {ServiceInfoModel} from "./service-info.model";
import {PrayerInfoModel} from "./prayer-info.model";

export interface SomeChurchWebsiteInformationModel {
  homePage: HomePageModel;
  ourChurch: OurChurchModel;
  serviceInfo: ServiceInfoModel;
  prayerInfo: PrayerInfoModel;
}
