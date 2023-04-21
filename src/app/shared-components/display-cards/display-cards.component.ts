import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DisplayCardModel} from "../../models/display-card.model";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.scss'],
})
export class DisplayCardsComponent implements OnInit {

  isSelected: number;

  @Input() displayCards: Observable<DisplayCardModel[]>;
  @Input() selectedCategory: string = '';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  navigateToPage() {
    this.navCtrl.navigateForward([`connect`]);
  }

}
