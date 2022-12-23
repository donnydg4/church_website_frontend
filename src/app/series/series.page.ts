import {Component, OnInit} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map} from "rxjs/operators";
import {sortByDateSeries} from "../utils/utils";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  seriesCards$ = this.dataService.allSeriesCards$
    .pipe(
      map(seriesCards => seriesCards.filter(allCards => (allCards.category === 'series' || allCards.category === 'devotional'))
        .sort(sortByDateSeries))
    );

  seriesCardsSearchable$ = combineLatest([
    this.seriesCards$,
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

  seriesTitle = 'Series';

  constructor(private dataService: AllChurchInformationService) { }

  ngOnInit() {
  }

}
