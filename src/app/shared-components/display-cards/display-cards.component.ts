import {Component, CUSTOM_ELEMENTS_SCHEMA, inject, input} from '@angular/core';
import {DisplayCardModel} from "../../models/sub-models/display-card.model";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonText,
  NavController
} from "@ionic/angular/standalone";
import {DatePipe, NgClass, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.scss'],
  imports: [
    IonGrid, IonRow, IonCol, IonCard, IonCardHeader,
    IonCardSubtitle, IonCardTitle, IonCardContent, IonButton,
    NgOptimizedImage,
    NgClass,
    DatePipe,
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DisplayCardsComponent {

  private navCtrl = inject(NavController);

  isSelected: number;

  displayCards = input<DisplayCardModel[]>(undefined);

  navigateToPage() {
    this.navCtrl.navigateForward([`connect`]);
  }

  navigateToKidsPage() {
    this.navCtrl.navigateForward([`kids-ministry`]);
  }

}
