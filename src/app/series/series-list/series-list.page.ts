import {Component} from '@angular/core';
import {WatchModel} from "../../models/sub-models/watch.model";
import {SeriesCardModel} from "../../models/sub-models/series-card.model";
import {convertSpaceToDash, sortByDate} from "../../utils/utils";
import {ExtrasService} from "../../service/extras.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.page.html',
  styleUrls: ['./series-list.page.scss'],
})
export class SeriesListPage {

  seriesCardFromStorage: SeriesCardModel;

  constructor(private extrasService: ExtrasService, private router: Router) {
    this.seriesCardFromStorage = JSON.parse(localStorage.getItem('series'));
  }

  protected readonly sortByDate = sortByDate;

  navigateToVideoPage(sermon: WatchModel) {
    this.extrasService.setSermonOrDevotionalOrGuestSpeakerCard(sermon);
    localStorage.setItem('card', JSON.stringify(this.extrasService.getSermonOrDevotionalOrGuestSpeakerCard()));
    this.router.navigate(['/series', convertSpaceToDash(this.seriesCardFromStorage.title), convertSpaceToDash(sermon.title)]);
  }

}
