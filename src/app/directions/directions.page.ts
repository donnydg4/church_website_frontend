import {Component, computed, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {NgOptimizedImage} from '@angular/common';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {IonButton, IonCol, IonContent, IonGrid, IonRow, IonText} from "@ionic/angular/standalone";


@Component({
  selector: 'app-directions',
  templateUrl: './directions.page.html',
  styleUrls: ['./directions.page.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage,
    FooterComponent,
    IonContent, IonGrid, IonRow, IonCol, IonButton, IonText
  ]
})
export class DirectionsPage {

  private dataService = inject(AllChurchInformationService);

  //rxResource signal from http request
  locations = this.dataService.allWebsiteInformationTwo.value;

}
