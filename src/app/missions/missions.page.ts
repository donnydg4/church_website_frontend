import {Component, computed, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {sortByCardCategory, sortByDateDisplay} from "../utils/utils";

@Component({
  selector: 'app-missions',
  templateUrl: './missions.page.html',
  styleUrls: ['./missions.page.scss'],
})
export class MissionsPage {

  private dataService = inject(AllChurchInformationService);

  //signals
  missions = computed(() => this.dataService.allChurchInformation()?.missionsPage);
  missionCards = computed(() => this.dataService.allChurchInformation()?.missionsPage?.displayCards.sort(sortByDateDisplay).sort(sortByCardCategory));
}
