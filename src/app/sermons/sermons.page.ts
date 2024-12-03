import {Component, computed, inject, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {sortByDate} from "../utils/utils";
import {AllWatchComponent} from '../shared-components/all-watch/all-watch.component';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {IonContent} from "@ionic/angular/standalone";

@Component({
    selector: 'app-sermons',
    templateUrl: './sermons.page.html',
    styleUrls: ['./sermons.page.scss'],
    imports: [
        IonContent,
        AllWatchComponent,
        FooterComponent,
    ]
})
export class SermonsPage {

  private dataService = inject(AllChurchInformationService);
  sermonTitle = signal('Sermons');

  sermonCardsSearchable = computed(() => this.dataService?.allChurchInformation()?.allWatchCards?.filter(allCards => allCards?.category === 'sermon')
    .sort(sortByDate)
    .filter(cards => {
        if (!this.dataService.searchQuerySignal()) {
          return cards
        }
        return cards.title.toLowerCase().indexOf(this.dataService.searchQuerySignal()) > -1;
      }
    ));

}
