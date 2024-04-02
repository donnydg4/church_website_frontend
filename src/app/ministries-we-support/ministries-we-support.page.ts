import {Component, computed, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";

@Component({
  selector: 'app-ministries-we-support',
  templateUrl: './ministries-we-support.page.html',
  styleUrls: ['./ministries-we-support.page.scss'],
})
export class MinistriesWeSupportPage {

  private dataService = inject(AllChurchInformationService);

  //signals
  ministriesWeSupportInfo = computed(() => this.dataService.allChurchInformation().ministriesWeSupportPage);
  displayMinistriesWeSupportCards = computed(() => this.dataService.allChurchInformation().ministriesWeSupportPage?.displayCards);
}
