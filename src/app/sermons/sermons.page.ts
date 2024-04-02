import {Component, computed, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";
import {sortByDate} from "../utils/utils";
import {combineLatest} from "rxjs";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.page.html',
  styleUrls: ['./sermons.page.scss'],
})
export class SermonsPage {

  private dataService = inject(AllChurchInformationService);
  sermonTitle = 'Sermons';

  // sermonCards$ = toObservable(this.dataService.allChurchInformation)
  //   .pipe(
  //     tap(data => console.log(data)),
  //     map(sermonCards => sermonCards.allWatchCards.filter(allCards => allCards.category === 'sermon')
  //     .sort(sortByDate))
  // );

  sermonCardsSearchable = computed(() => this.dataService.allChurchInformation()?.allWatchCards.filter(allCards => allCards!.category === 'sermon').sort(sortByDate)
    .filter(cards => {
        if (!this.dataService.searchQuerySignal()) {
          return cards
        }
        return cards.title.toLowerCase().indexOf(this.dataService.searchQuerySignal()) > -1;
      }
    ));

  // //signal
  // sermonCards = toSignal(this.sermonCards$);
  //
  // //computed signal
  // sermonCardsSearchable = computed(() => this.sermonCards().filter(
  //   cards => {
  //     if (!this.dataService.searchQuerySignal()) {
  //       return cards
  //     }
  //     return cards.title.toLowerCase().indexOf(this.dataService.searchQuerySignal()) > -1;
  //   }
  // ));
}
