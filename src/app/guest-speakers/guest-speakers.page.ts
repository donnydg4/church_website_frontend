import {Component, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map} from "rxjs/operators";
import {sortByDate} from "../utils/utils";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-guest-speakers',
  templateUrl: './guest-speakers.page.html',
  styleUrls: ['./guest-speakers.page.scss'],
})
export class GuestSpeakersPage {

  private dataService = inject(AllChurchInformationService);
  guestSpeakersTitle = 'Guest Speakers';

  guestSpeakersCards$ = this.dataService.allWebsiteInformationForCalendar$
    .pipe(
      map(guestSpeakerCards => guestSpeakerCards.allWatchCards.filter(allCards => allCards.category === 'guest')
        .sort(sortByDate))
    );

  guestSpeakerCardsSearchable$ = combineLatest([
    this.guestSpeakersCards$,
    this.dataService.searchQueryAction$
  ])
    .pipe(
      map(([cards, query]) => cards.filter(
        cards => {
          if (!query) {
            return cards
          }
          return cards.title.toLowerCase().indexOf(query) > -1;
        }
      )));

}
