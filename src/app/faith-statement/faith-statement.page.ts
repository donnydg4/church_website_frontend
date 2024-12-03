import {Component, computed, inject,} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {NgOptimizedImage} from '@angular/common';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {IonButton, IonCard, IonCol, IonContent, IonGrid, IonRow, IonText} from "@ionic/angular/standalone";

@Component({
    selector: 'app-faith-statement',
    templateUrl: './faith-statement.page.html',
    styleUrls: ['./faith-statement.page.scss'],
    imports: [
        NgOptimizedImage,
        FooterComponent,
        IonContent, IonGrid, IonRow, IonCol, IonCard, IonButton, IonText
    ]
})
export class FaithStatementPage {

  private dataService = inject(AllChurchInformationService);

  //convert rxjs to signal
  faithStuff = computed(() => this.dataService.allChurchInformation()?.statementOfFaith);

}
