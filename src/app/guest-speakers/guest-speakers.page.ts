import {Component, OnInit} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map} from "rxjs/operators";
import {sortByDate} from "../utils/utils";

@Component({
  selector: 'app-guest-speakers',
  templateUrl: './guest-speakers.page.html',
  styleUrls: ['./guest-speakers.page.scss'],
})
export class GuestSpeakersPage implements OnInit {

  guestSpeakersCards$ = this.cardService.allWatchCards$
    .pipe(
      map(guestSpeakerCards => guestSpeakerCards.filter(allCards => allCards.category === 'guest')
        .sort(sortByDate))
    );

  guestSpeakersTitle = 'Guest Speakers';

  constructor(private cardService: AllChurchInformationService) { }

  ngOnInit() {
  }

}
