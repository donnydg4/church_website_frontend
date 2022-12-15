import {Component, OnInit} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  seriesCards$ = this.cardService.allWatchCards$
    .pipe(
      map(seriesCards => seriesCards.filter(allCards => allCards.category === 'series'))
    );

  seriesTitle = 'Series';

  constructor(private cardService: AllChurchInformationService) { }

  ngOnInit() {
  }

}
