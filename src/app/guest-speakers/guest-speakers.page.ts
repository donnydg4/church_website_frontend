import {Component, OnInit} from '@angular/core';
import {WatchModel} from "../models/watch.model";
import {AllChurchInformationService} from "../service/all-church-information.service";

@Component({
  selector: 'app-guest-speakers',
  templateUrl: './guest-speakers.page.html',
  styleUrls: ['./guest-speakers.page.scss'],
})
export class GuestSpeakersPage implements OnInit {

  guest_speakers: WatchModel[] = this.watchArray.getWatchModels();

  guestSpeakersTitle = 'Guest Speakers';

  constructor(private watchArray: AllChurchInformationService) { }

  ngOnInit() {
  }

}
