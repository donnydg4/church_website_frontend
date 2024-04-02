import {Component, computed, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {sortByCardCategory} from "../utils/utils";

@Component({
  selector: 'app-our-ministries',
  templateUrl: './our-ministries.page.html',
  styleUrls: ['./our-ministries.page.scss'],
})
export class OurMinistriesPage {

  private dataService = inject(AllChurchInformationService);

  //signals
  ourMinistries = computed(() => this.dataService?.allChurchInformation()?.ourMinistriesPage!);
  displayOurMinistryCards = computed(() => this.dataService.allChurchInformation()?.ourMinistriesPage?.displayCards.sort(sortByCardCategory));
}



