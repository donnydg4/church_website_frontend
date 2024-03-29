import {Component, computed, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map} from "rxjs/operators";
import {sortByDateSeries} from "../utils/utils";
import {combineLatest} from "rxjs";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage {

  private dataService = inject(AllChurchInformationService);
  seriesTitle = 'Series';

  seriesCards$ = toObservable(this.dataService.allChurchInformation)
    .pipe(
      map(seriesCards => seriesCards.allSeriesCards.filter(allCards => (allCards.category === 'series' || allCards.category === 'devotional'))
        .sort(sortByDateSeries))
    );

  //signal
  seriesCards = toSignal(this.seriesCards$);

  //computed signal
  seriesCardsSearchable = computed(() => this.seriesCards().filter(
    cards => {
      if (!this.dataService.searchQuerySignal()) {
        return cards;
      }
      return cards.title.toLowerCase().indexOf(this.dataService.searchQuerySignal()) > -1;
    }
  ));

  // seriesCardsSearchable$ = combineLatest([
  //   this.seriesCards$,
  //   this.dataService.searchQueryAction$
  // ])
  //   .pipe(
  //     map(([cards, query]) => cards.filter(
  //       cards => {
  //         if (!query) {
  //           return cards
  //         }
  //         return cards.title.toLowerCase().indexOf(query) > -1;
  //       }
  //     )));
}
