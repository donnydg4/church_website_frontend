import {Component, computed, inject, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {sortByDate} from "../utils/utils";

@Component({
  selector: 'app-devotionals',
  templateUrl: './devotionals.page.html',
  styleUrls: ['./devotionals.page.scss'],
})
export class DevotionalsPage {

  devotionalsTitle = signal('Devotionals');
  private dataService = inject(AllChurchInformationService);

  devotionalCardsSearchable = computed(() => this.dataService?.allChurchInformation()?.allWatchCards?.filter(allCards => allCards?.category === 'devotional').sort(sortByDate)
    .filter(cards => {
      if (!this.dataService.searchQuerySignal()) {
        return cards
      }
      return cards.title.toLowerCase().indexOf(this.dataService.searchQuerySignal()) > -1;
    }
  ));

}
