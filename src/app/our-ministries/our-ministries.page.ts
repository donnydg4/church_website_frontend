import {Component, computed, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {sortByCardCategory} from "../utils/utils";
import { IonicModule } from '@ionic/angular';
import { NgOptimizedImage } from '@angular/common';
import { DisplayCardsComponent } from '../shared-components/display-cards/display-cards.component';
import { FooterComponent } from '../shared-components/footer/footer.component';

@Component({
    selector: 'app-our-ministries',
    templateUrl: './our-ministries.page.html',
    styleUrls: ['./our-ministries.page.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgOptimizedImage,
        DisplayCardsComponent,
        FooterComponent,
    ],
})
export class OurMinistriesPage {

  private dataService = inject(AllChurchInformationService);

  //signals
  ourMinistries = computed(() => this.dataService?.allChurchInformation()?.ourMinistriesPage!);
  displayOurMinistryCards = computed(() => this.dataService.allChurchInformation()?.ourMinistriesPage?.displayCards.sort(sortByCardCategory));
}



