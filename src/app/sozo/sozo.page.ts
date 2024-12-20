import {Component, inject, OnInit} from '@angular/core';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {IonCol, IonContent, IonGrid, IonRow, IonSpinner} from "@ionic/angular/standalone";
import {DisplayCardsComponent} from "../shared-components/display-cards/display-cards.component";
import {NgOptimizedImage} from "@angular/common";
import {AllChurchInformationService} from "../service/all-church-information.service";

@Component({
  selector: 'app-sozo',
  templateUrl: './sozo.page.html',
  styleUrls: ['./sozo.page.scss'],
  standalone: true,
    imports: [
        FooterComponent,
        IonCol,
        IonContent,
        IonGrid,
        IonRow,
        IonSpinner,
        NgOptimizedImage
    ]
})
export class SozoPage {

  private dataService = inject(AllChurchInformationService);

  sozo = this.dataService.allWebsiteInformationTwo.value;

  constructor() { }

}
