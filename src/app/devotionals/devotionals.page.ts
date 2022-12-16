import {Component, OnInit} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map} from "rxjs/operators";
import {sortByDate} from "../utils/utils";

@Component({
  selector: 'app-devotionals',
  templateUrl: './devotionals.page.html',
  styleUrls: ['./devotionals.page.scss'],
})
export class DevotionalsPage implements OnInit {

  devotionalCards$ = this.cardService.allWatchCards$
    .pipe(
      map(devotionalCards => devotionalCards.filter(allCards => allCards.category === 'devotional')
        .sort(sortByDate))
    );

  devotionalsTitle = 'Devotionals';

  constructor(private cardService: AllChurchInformationService) { }

  ngOnInit() {
  }

}
