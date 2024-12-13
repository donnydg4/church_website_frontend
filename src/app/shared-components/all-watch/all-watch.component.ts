import {Component, inject, input} from '@angular/core';
import {WatchModel} from "../../models/sub-models/watch.model";
import {AllChurchInformationService} from "../../service/all-church-information.service";
import {SeriesCardModel} from "../../models/sub-models/series-card.model";
import {NgxPaginationModule, PaginationInstance} from "ngx-pagination";
import {Router} from '@angular/router';
import {convertSpaceToDash} from "../../utils/utils";
import {ExtrasService} from "../../service/extras.service";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
  IonSearchbar
} from "@ionic/angular/standalone";
import {DatePipe, NgOptimizedImage, UpperCasePipe} from '@angular/common';


@Component({
  selector: 'app-all-watch',
  templateUrl: './all-watch.component.html',
  styleUrls: ['./all-watch.component.scss'],
  standalone: true,
  imports: [
    IonGrid, IonRow, IonCol, IonCard, IonCardHeader,
    IonCardSubtitle, IonCardTitle, IonSearchbar,
    NgOptimizedImage,
    NgxPaginationModule,
    UpperCasePipe,
    DatePipe,
  ]
})
export class AllWatchComponent {

  private dataService = inject(AllChurchInformationService);
  private router = inject(Router);
  private extrasService = inject(ExtrasService);

  page: number = 1;

  readonly title = input('');
  readonly objectArray = input<WatchModel[]>();
  readonly seriesArray = input<SeriesCardModel[]>();

  public config: PaginationInstance = {
    itemsPerPage: 15,
    currentPage: this.page
  }

  handleChange(event) {
    this.dataService.searchQueryWord(event.target.value.toLowerCase());
  }

  pageEvent(page: number) {
    this.page = page;
    this.config.currentPage = page;
    window.scrollTo(0, 0);
  }

  navigateToSermonOrDevotionalOrGuestSpeaker(card: WatchModel) {
    if (card.type.toLowerCase() === 'sermon') {
      this.extrasService.setSermonOrDevotionalOrGuestSpeakerCard(card);
      localStorage.setItem('card', JSON.stringify(this.extrasService.getSermonOrDevotionalOrGuestSpeakerCard()));
      this.router.navigate(['/sermons', convertSpaceToDash(card.title)]);
    }
    if (card.category.toLowerCase() === 'devotional') {
      this.extrasService.setSermonOrDevotionalOrGuestSpeakerCard(card);
      localStorage.setItem('card', JSON.stringify(this.extrasService.getSermonOrDevotionalOrGuestSpeakerCard()));
      this.router.navigate(['/devotionals', convertSpaceToDash(card.title)]);
    }
    if (card.category.toLowerCase() === 'podcasts') {
      this.extrasService.setSermonOrDevotionalOrGuestSpeakerCard(card);
      localStorage.setItem('card', JSON.stringify(this.extrasService.getSermonOrDevotionalOrGuestSpeakerCard()));
      this.router.navigate(['/podcasts', convertSpaceToDash(card.title)]);
    }
  }

  navigateToSeriesPage(seriesCard: SeriesCardModel) {
    this.extrasService.setSeriesCard(seriesCard);
    localStorage.setItem('series', JSON.stringify(this.extrasService.getSeriesCard()));
    this.router.navigate(['/series', convertSpaceToDash(seriesCard.title)]);
  }

}
