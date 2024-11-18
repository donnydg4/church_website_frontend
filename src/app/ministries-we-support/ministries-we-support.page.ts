import {Component, computed, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import { IonicModule } from '@ionic/angular';
import { NgOptimizedImage } from '@angular/common';
import { DisplayCardsComponent } from '../shared-components/display-cards/display-cards.component';
import { FooterComponent } from '../shared-components/footer/footer.component';

@Component({
    selector: 'app-ministries-we-support',
    templateUrl: './ministries-we-support.page.html',
    styleUrls: ['./ministries-we-support.page.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgOptimizedImage,
        DisplayCardsComponent,
        FooterComponent,
    ],
})
export class MinistriesWeSupportPage {

  private dataService = inject(AllChurchInformationService);

  //signals
  ministriesWeSupportInfo = computed(() => this.dataService.allChurchInformation().ministriesWeSupportPage);
  displayMinistriesWeSupportCards = computed(() => this.dataService.allChurchInformation().ministriesWeSupportPage?.displayCards);
}
