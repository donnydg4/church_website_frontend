import {Component, computed, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {sortByDate} from "../utils/utils";

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.page.html',
  styleUrls: ['./sermons.page.scss'],
})
export class SermonsPage {

  private dataService = inject(AllChurchInformationService);
  sermonTitle = 'Sermons';

  sermonCardsSearchable = computed(() => this.dataService.allChurchInformation()?.allWatchCards.filter(allCards => allCards!.category === 'sermon').sort(sortByDate)
    .filter(cards => {
        if (!this.dataService.searchQuerySignal()) {
          return cards
        }
        return cards.title.toLowerCase().indexOf(this.dataService.searchQuerySignal()) > -1;
      }
    ));

}
