import {Component, computed, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {sortByCardCategory, sortByDateDisplay} from "../utils/utils";
import { IonicModule } from '@ionic/angular';
import { NgOptimizedImage } from '@angular/common';
import { DisplayCardsComponent } from '../shared-components/display-cards/display-cards.component';
import { FooterComponent } from '../shared-components/footer/footer.component';

@Component({
    selector: 'app-missions',
    templateUrl: './missions.page.html',
    styleUrls: ['./missions.page.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgOptimizedImage,
        DisplayCardsComponent,
        FooterComponent,
    ],
})
export class MissionsPage {

  private dataService = inject(AllChurchInformationService);

  //signals
  missions = computed(() => this.dataService.allChurchInformation()?.missionsPage);
  missionCards = computed(() => this.dataService.allChurchInformation()?.missionsPage?.displayCards.sort(sortByDateDisplay).sort(sortByCardCategory));
}
