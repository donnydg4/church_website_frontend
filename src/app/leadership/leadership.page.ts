import {Component, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {NgOptimizedImage} from '@angular/common';
import {DisplayCardsComponent} from '../shared-components/display-cards/display-cards.component';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {IonCol, IonContent, IonGrid, IonRow} from "@ionic/angular/standalone";

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.page.html',
  styleUrls: ['./leadership.page.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage,
    DisplayCardsComponent,
    FooterComponent,
    IonContent, IonGrid, IonRow, IonCol
  ]
})
export class LeadershipPage {

  private dataService = inject(AllChurchInformationService);

  //rxResource signal from http request
  leadership = this.dataService.allWebsiteInformationTwo.value;
}
