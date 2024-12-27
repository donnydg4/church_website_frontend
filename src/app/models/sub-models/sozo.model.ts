import {SozoInfo} from "./sozo-info.model";

export interface SozoPageModel {
  firstImage: string;
  firstImageTitle: string;
  textBreak: string;
  textBreakTwo: string;
  imageOne: string;
  imageOneText: string[];
  imageTwo: string;
  imageTwoText: string[];
  imageThree: string;
  imageThreeText: string[];
  sozoInfos: SozoInfo[];
}
