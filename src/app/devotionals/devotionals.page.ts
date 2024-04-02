import {Component, computed, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map} from "rxjs/operators";
import {sortByDate} from "../utils/utils";
import {combineLatest} from "rxjs";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-devotionals',
  templateUrl: './devotionals.page.html',
  styleUrls: ['./devotionals.page.scss'],
})
export class DevotionalsPage {

  devotionalsTitle = 'Devotionals';

  private dataService = inject(AllChurchInformationService);

  // devotionalCards$ = toObservable(this.dataService.allChurchInformation)
  //   .pipe(
  //     map(devotionalCards => devotionalCards.allWatchCards.filter(allCards => allCards.category === 'devotional')
  //       .sort(sortByDate))
  //   );
  //
  // devotionalCards = toSignal(this.devotionalCards$);

  devotionalCardsSearchable = computed(() => this.dataService.allChurchInformation()?.allWatchCards
    .filter(allCards => allCards.category === 'devotional').sort(sortByDate)
    .filter(cards => {
      if (!this.dataService.searchQuerySignal()) {
        return cards
      }
      return cards.title.toLowerCase().indexOf(this.dataService.searchQuerySignal()) > -1;
    }
  ));

  // devotionalCardsSearchable$ = combineLatest([
  //   this.devotionalCards$,
  //   this.dataService.searchQueryAction$
  // ])
  //   .pipe(
  //     map(([cards, query]) => cards.filter(
  //       cards => {
  //         if (!query) {
  //           return cards
  //         }
  //         return cards.title.toLowerCase().indexOf(query) > -1;
  //       }
  //     ))
  //   );
}
