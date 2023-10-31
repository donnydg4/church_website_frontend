import {Component, OnInit} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map} from "rxjs/operators";
import {sortByDate} from "../utils/utils";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-devotionals',
  templateUrl: './devotionals.page.html',
  styleUrls: ['./devotionals.page.scss'],
})
export class DevotionalsPage implements OnInit {

  devotionalCards$ = this.dataService.allWebsiteInformation$
    .pipe(
      map(devotionalCards => devotionalCards.allWatchCards.filter(allCards => allCards.category === 'devotional')
        .sort(sortByDate))
    );

  devotionalCardsSearchable$ = combineLatest([
    this.devotionalCards$,
    this.dataService.searchQueryAction$
  ])
    .pipe(
      map(([cards, query]) => cards.filter(
        cards => {
          if (!query) {
            return cards
          }
          return cards.title.toLowerCase().indexOf(query) > -1;
        }
      )));

  devotionalsTitle = 'Devotionals';

  constructor(private dataService: AllChurchInformationService) {
  }

  ngOnInit() {
  }

}
