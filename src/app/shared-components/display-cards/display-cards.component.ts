import {Component, inject, Input} from '@angular/core';
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
  standalone: true,
  imports: [
    IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader,
    IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonText,
    NgOptimizedImage,
    NgClass,
    DatePipe,
  ],
})
export class DisplayCardsComponent {

  private navCtrl = inject(NavController);

  isSelected: number;

  @Input() displayCards: DisplayCardModel[];

  navigateToPage() {
    this.navCtrl.navigateForward([`connect`]);
  }

  navigateToKidsPage() {
    this.navCtrl.navigateForward([`kids-ministry`]);
  }

}
