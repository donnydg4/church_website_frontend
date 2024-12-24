import {Component, HostListener, inject, OnInit} from '@angular/core';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {
  IonCard, IonCardContent,
  IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonSpinner,
  IonText, Platform
} from "@ionic/angular/standalone";
import {DisplayCardsComponent} from "../shared-components/display-cards/display-cards.component";
import {DatePipe, NgOptimizedImage} from "@angular/common";
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
    NgOptimizedImage,
    IonText,
    DatePipe,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent
  ]
})
export class SozoPage {

  private platform = inject(Platform);
  private dataService = inject(AllChurchInformationService);

  public platformWidth = this.platform.width()

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.platformWidth = this.platform.width();
  }

  sozo = this.dataService.allWebsiteInformationTwo.value;

  constructor() { }

}
