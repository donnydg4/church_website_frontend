import {Component, inject} from '@angular/core';
import {WatchModel} from "../../models/sub-models/watch.model";
import {SeriesCardModel} from "../../models/sub-models/series-card.model";
import {convertSpaceToDash, sortByDate} from "../../utils/utils";
import {ExtrasService} from "../../service/extras.service";
import {Router} from "@angular/router";
import { IonicModule } from '@ionic/angular';
import { NgOptimizedImage, DatePipe } from '@angular/common';
import { FooterComponent } from '../../shared-components/footer/footer.component';

@Component({
    selector: 'app-series-list',
    templateUrl: './series-list.page.html',
    styleUrls: ['./series-list.page.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgOptimizedImage,
        FooterComponent,
        DatePipe,
    ],
})
export class SeriesListPage {

  private extrasService = inject(ExtrasService);
  private router = inject(Router);

  seriesCardFromStorage: SeriesCardModel;

  constructor() {
    this.seriesCardFromStorage = JSON.parse(localStorage.getItem('series'));
  }

  protected readonly sortByDate = sortByDate;

  navigateToVideoPage(sermon: WatchModel) {
    this.extrasService.setSermonOrDevotionalOrGuestSpeakerCard(sermon);
    localStorage.setItem('card', JSON.stringify(this.extrasService.getSermonOrDevotionalOrGuestSpeakerCard()));
    this.router.navigate(['/series', convertSpaceToDash(this.seriesCardFromStorage.title), convertSpaceToDash(sermon.title)]);
  }

}
