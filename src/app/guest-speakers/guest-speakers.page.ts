import {Component, computed, inject, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {sortByDate} from "../utils/utils";
import {AllWatchComponent} from '../shared-components/all-watch/all-watch.component';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {IonContent} from "@ionic/angular/standalone";

@Component({
  selector: 'app-guest-speakers',
  templateUrl: './guest-speakers.page.html',
  styleUrls: ['./guest-speakers.page.scss'],
  standalone: true,
  imports: [
    AllWatchComponent,
    FooterComponent,
    IonContent
  ]
})
export class GuestSpeakersPage {

  private dataService = inject(AllChurchInformationService);
  podcasts = signal('Podcasts');

  //rxResource signal from http request
  podcastsSearchable = computed(() => this.dataService.allWebsiteInformationTwo.value()?.allWatchCards?.filter(allCards => allCards?.category === 'podcasts').sort(sortByDate)
    .filter(cards => {
        if (!this.dataService.searchQuerySignal()) {
          return cards
        }
        return cards.title.toLowerCase().indexOf(this.dataService.searchQuerySignal()) > -1;
      }
    ));
}
