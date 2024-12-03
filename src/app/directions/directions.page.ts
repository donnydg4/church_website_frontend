import {Component, computed, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {NgOptimizedImage} from '@angular/common';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {IonButton, IonCol, IonContent, IonGrid, IonRow, IonText} from "@ionic/angular/standalone";


@Component({
    selector: 'app-directions',
    templateUrl: './directions.page.html',
    styleUrls: ['./directions.page.scss'],
    imports: [
        NgOptimizedImage,
        FooterComponent,
        IonContent, IonGrid, IonRow, IonCol, IonButton, IonText
    ]
})
export class DirectionsPage {

  private dataService = inject(AllChurchInformationService);

  //convert rxjs to signal
  locations = computed(() => this.dataService.allChurchInformation().allWebsiteInformation?.directions);
}
