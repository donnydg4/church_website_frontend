import {DisplayCardModel} from "./display-card.model";

export interface MissionsModel {
  title?: string;
  coverPhoto?: string;
  displayCards?: DisplayCardModel[];
}
