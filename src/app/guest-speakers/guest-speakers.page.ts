import {Component, computed, inject, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {sortByDate} from "../utils/utils";

@Component({
  selector: 'app-guest-speakers',
  templateUrl: './guest-speakers.page.html',
  styleUrls: ['./guest-speakers.page.scss'],
})
export class GuestSpeakersPage {

  private dataService = inject(AllChurchInformationService);
  podcasts = signal('Podcasts');

  podcastsSearchable = computed(() => this.dataService.allChurchInformation()?.allWatchCards?.filter(allCards => allCards?.category === 'guest').sort(sortByDate)
    .filter(cards => {
        if (!this.dataService.searchQuerySignal()) {
          return cards
        }
        return cards.title.toLowerCase().indexOf(this.dataService.searchQuerySignal()) > -1;
      }
    ));
}
