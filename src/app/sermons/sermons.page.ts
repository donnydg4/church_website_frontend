import {Component, OnInit} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map} from "rxjs/operators";
import {sortByDate} from "../utils/utils";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.page.html',
  styleUrls: ['./sermons.page.scss'],
})
export class SermonsPage implements OnInit {

  sermonTitle = 'Sermons';

  sermonCards$ = this.dataService.allWebsiteInformation$
    .pipe(
      map(sermonCards => sermonCards.allWatchCards.filter(allCards => allCards.category === 'sermon')
        .sort(sortByDate))
    );

  sermonCardsSearchable$ = combineLatest([
    this.sermonCards$,
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

  constructor(private dataService: AllChurchInformationService) {
  }

  ngOnInit() {
  }

}
