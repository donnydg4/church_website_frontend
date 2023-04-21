import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DisplayCardModel} from "../../models/display-card.model";

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.scss'],
})
export class DisplayCardsComponent implements OnInit {

  @Input() displayCards: Observable<DisplayCardModel[]>;
  @Input() selectedCategory: string = '';

  constructor() { }

  ngOnInit() {}


}
