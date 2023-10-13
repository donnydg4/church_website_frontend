import {Injectable} from '@angular/core';
import {WatchModel} from "../models/watch.model";
import {SeriesCardModel} from "../models/series-card.model";

@Injectable({
  providedIn: 'root'
})
export class ExtrasService {

  anyCard: WatchModel;
  anyCardArray: WatchModel[];
  seriesCard: SeriesCardModel;

  series: boolean;

  constructor() { }

  public setExtras(data: WatchModel) {
    this.anyCard = data;
  }

  public setExtrasSeries(data: SeriesCardModel){
    this.seriesCard = data;
  }

  public setExtrasArray(data: WatchModel[]){
    this.anyCardArray = data;
  }

  public setSeries(series: boolean) {
    this.series = series;
  }

  public getExtrasArray() {
    return [...this.anyCardArray];
  }

  public getExtrasSeries() {
    return this.seriesCard;
  }

  public getExtras() {
    return this.anyCard;
  }

  public getSeries() {
    return this.series;
  }
}
