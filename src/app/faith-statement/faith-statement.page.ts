import {Component, inject,} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {NgOptimizedImage} from '@angular/common';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {IonCard, IonCol, IonContent, IonGrid, IonRow} from "@ionic/angular/standalone";

@Component({
  selector: 'app-faith-statement',
  templateUrl: './faith-statement.page.html',
  styleUrls: ['./faith-statement.page.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage,
    FooterComponent,
    IonContent, IonGrid, IonRow, IonCol, IonCard
  ]
})
export class FaithStatementPage {

  private dataService = inject(AllChurchInformationService);

  //convert rxjs to signal
  // faithStuff = computed(() => this.dataService.allChurchInformation()?.statementOfFaith);
  //rxResource signal from http request
  faithStuff = this.dataService.allWebsiteInformationTwo.value;
}
