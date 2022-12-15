import {Component, OnInit} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-guest-speakers',
  templateUrl: './guest-speakers.page.html',
  styleUrls: ['./guest-speakers.page.scss'],
})
export class GuestSpeakersPage implements OnInit {

  guestSpeakersCards$ = this.cardService.allWatchCards$
    .pipe(
      map(guestSpeakerCards => guestSpeakerCards.filter(allCards => allCards.category === 'guest'))
    );

  guestSpeakersTitle = 'Guest Speakers';

  constructor(private cardService: AllChurchInformationService) { }

  ngOnInit() {
  }

}
