import {Component, computed, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map} from "rxjs/operators";
import {sortByDate} from "../utils/utils";
import {combineLatest} from "rxjs";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-guest-speakers',
  templateUrl: './guest-speakers.page.html',
  styleUrls: ['./guest-speakers.page.scss'],
})
export class GuestSpeakersPage {

  private dataService = inject(AllChurchInformationService);
  guestSpeakersTitle = 'Guest Speakers';

  // guestSpeakersCards$ = toObservable(this.dataService.allChurchInformation)
  //   .pipe(
  //     map(guestSpeakerCards => guestSpeakerCards.allWatchCards.filter(allCards => allCards.category === 'guest')
  //       .sort(sortByDate))
  //   );
  //
  // guestSpeakerCards = toSignal(this.guestSpeakersCards$);
  //
  // guestSpeakerCardsSearchable = computed(() => this.guestSpeakerCards().filter(
  //   cards => {
  //     if (!this.dataService.searchQuerySignal()) {
  //       return cards
  //     }
  //     return cards.title.toLowerCase().indexOf(this.dataService.searchQuerySignal()) > -1;
  //   }
  // ));
  guestSpeakerCardsSearchable = computed(() => this.dataService.allChurchInformation()?.allWatchCards
    .filter(allCards => allCards.category === 'guest').sort(sortByDate)
    .filter(cards => {
        if (!this.dataService.searchQuerySignal()) {
          return cards
        }
        return cards.title.toLowerCase().indexOf(this.dataService.searchQuerySignal()) > -1;
      }
    ));

  // guestSpeakerCardsSearchable$ = combineLatest([
  //   this.guestSpeakersCards$,
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
  //     )));

}
