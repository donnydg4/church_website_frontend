import {Component, computed, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.page.html',
  styleUrls: ['./leadership.page.scss'],
})
export class LeadershipPage {

  private dataService = inject(AllChurchInformationService);

  //signals
  leadershipInfo = computed(() => this.dataService.allChurchInformation()?.leadershipPage);
  leadershipCards = computed(() => this.dataService.allChurchInformation()?.leadershipPage?.displayCards);
}
