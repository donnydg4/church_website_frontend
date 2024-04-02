import {Component, computed, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {sortByDate} from "../utils/utils";

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage {

  private dataService = inject(AllChurchInformationService);
  seriesTitle = 'Series';

  seriesCardsSearchable = computed(() => this.dataService.allChurchInformation()?.allSeriesCards!
    .filter(allCards => (allCards.category === 'series' || allCards.category === 'devotional')).sort(sortByDate)
    .filter(cards => {
        if (!this.dataService.searchQuerySignal()) {
          return cards
        }
        return cards.title.toLowerCase().indexOf(this.dataService.searchQuerySignal()) > -1;
      }
    ));

}
