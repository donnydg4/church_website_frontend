import {WatchModel} from "./watch.model";

export interface SeriesCardModel {
  type: string;
  imageUrl: string;
  title: string;
  category: string;
  date: Date;
  sermons: WatchModel[];
}
