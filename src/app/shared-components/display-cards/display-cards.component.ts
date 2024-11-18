import {Component, inject, Input} from '@angular/core';
import {DisplayCardModel} from "../../models/sub-models/display-card.model";
import { NavController, IonicModule } from "@ionic/angular";
import { NgOptimizedImage, NgClass, DatePipe } from '@angular/common';

@Component({
    selector: 'app-display-cards',
    templateUrl: './display-cards.component.html',
    styleUrls: ['./display-cards.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
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
