import {Component, inject, Input} from '@angular/core';
import {WatchModel} from "../../models/sub-models/watch.model";
import {AllChurchInformationService} from "../../service/all-church-information.service";
import {Observable} from "rxjs";
import {SeriesCardModel} from "../../models/sub-models/series-card.model";
import {PaginationInstance} from "ngx-pagination";
import {Router} from '@angular/router';
import {convertSpaceToDash} from "../../utils/utils";
import {ExtrasService} from "../../service/extras.service";


@Component({
  selector: 'app-all-watch',
  templateUrl: './all-watch.component.html',
  styleUrls: ['./all-watch.component.scss'],
})
export class AllWatchComponent {

  private dataService = inject(AllChurchInformationService);
  private router = inject(Router);
  private extrasService = inject(ExtrasService);

  page: number = 1;

  @Input() title = '';
  @Input() objectArray: Observable<WatchModel[]>
  @Input() seriesArray: Observable<SeriesCardModel[]>

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

  navigateToSermonOrDevotionalOrGuestSpeaker(card: WatchModel){
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
    if (card.category.toLowerCase() === 'guest') {
      this.extrasService.setSermonOrDevotionalOrGuestSpeakerCard(card);
      localStorage.setItem('card', JSON.stringify(this.extrasService.getSermonOrDevotionalOrGuestSpeakerCard()));
      this.router.navigate(['/guest-speakers', convertSpaceToDash(card.title)]);
    }
  }

  navigateToSeriesPage(seriesCard: SeriesCardModel) {
      this.extrasService.setSeriesCard(seriesCard);
      localStorage.setItem('series', JSON.stringify(this.extrasService.getSeriesCard()));
      this.router.navigate(['/series', convertSpaceToDash(seriesCard.title)]);
  }

}
