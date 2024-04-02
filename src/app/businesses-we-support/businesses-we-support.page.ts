import {Component, computed, inject} from '@angular/core';
import {sortByCardCategory} from "../utils/utils";
import {AllChurchInformationService} from "../service/all-church-information.service";

@Component({
  selector: 'app-businesses-we-support',
  templateUrl: './businesses-we-support.page.html',
  styleUrls: ['./businesses-we-support.page.scss'],
})
export class BusinessesWeSupportPage {

  private dataService = inject(AllChurchInformationService);

  //convert back to signal to use in template!
  displayBusinessCards = computed(() => this.dataService.allChurchInformation().businessesWeSupportPage?.displayCards.sort(sortByCardCategory));
  businessesWeSupport = computed(() => this.dataService.allChurchInformation()?.businessesWeSupportPage);

}
