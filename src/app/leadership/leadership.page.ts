import {Component, computed, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import { IonicModule } from '@ionic/angular';
import { NgOptimizedImage } from '@angular/common';
import { DisplayCardsComponent } from '../shared-components/display-cards/display-cards.component';
import { FooterComponent } from '../shared-components/footer/footer.component';

@Component({
    selector: 'app-leadership',
    templateUrl: './leadership.page.html',
    styleUrls: ['./leadership.page.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgOptimizedImage,
        DisplayCardsComponent,
        FooterComponent,
    ],
})
export class LeadershipPage {

  private dataService = inject(AllChurchInformationService);

  //signals
  leadershipInfo = computed(() => this.dataService.allChurchInformation()?.leadershipPage);
  leadershipCards = computed(() => this.dataService.allChurchInformation()?.leadershipPage?.displayCards);
}
