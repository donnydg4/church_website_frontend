import {Component, computed, inject, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {sortByDate} from "../utils/utils";
import {AllWatchComponent} from '../shared-components/all-watch/all-watch.component';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {IonContent} from "@ionic/angular/standalone";

@Component({
  selector: 'app-devotionals',
  templateUrl: './devotionals.page.html',
  styleUrls: ['./devotionals.page.scss'],
  standalone: true,
  imports: [
    AllWatchComponent,
    FooterComponent,
    IonContent
  ]
})
export class DevotionalsPage {

  devotionalsTitle = signal('Devotionals');
  private dataService = inject(AllChurchInformationService);

  devotionalCardsSearchable = computed(() => this.dataService?.allWebsiteInformationTwo.value()?.allWatchCards?.filter(allCards => allCards?.category === 'devotional').sort(sortByDate)
    .filter(cards => {
        if (!this.dataService.searchQuerySignal()) {
          return cards
        }
        return cards.title.toLowerCase().indexOf(this.dataService.searchQuerySignal()) > -1;
      }
    ));

}
