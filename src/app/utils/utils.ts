import {WatchModel} from "../models/watch.model";
import {SeriesCardModel} from "../models/series-card.model";

export function sortByDate(a: WatchModel, b: WatchModel) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}
export function sortByDateSeries(a: SeriesCardModel, b: SeriesCardModel) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}
