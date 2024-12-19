import {Component, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {IonCol, IonContent, IonGrid, IonRow, IonSpinner} from "@ionic/angular/standalone";
import {NgOptimizedImage} from '@angular/common';
import {DisplayCardsComponent} from '../shared-components/display-cards/display-cards.component';
import {FooterComponent} from '../shared-components/footer/footer.component';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.page.html',
  styleUrls: ['./missions.page.scss'],
  standalone: true,
    imports: [
        IonContent, IonGrid, IonRow, IonCol,
        NgOptimizedImage,
        DisplayCardsComponent,
        FooterComponent, IonSpinner,
    ]
})
export class MissionsPage {

  private dataService = inject(AllChurchInformationService);

  //rxResource signal from http request
  missions = this.dataService.allWebsiteInformationTwo.value;
}
