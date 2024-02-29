import {IndividualHistoryModel} from "./individual-history.model";

export interface History {
  title: string;
  subTitle: string;
  individualHistoryObject: IndividualHistoryModel[];
}
