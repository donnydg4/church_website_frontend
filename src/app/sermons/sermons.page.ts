import {Component, OnInit} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map} from "rxjs/operators";
import {sortByDate} from "../utils/utils";

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.page.html',
  styleUrls: ['./sermons.page.scss'],
})
export class SermonsPage implements OnInit {

  sermonTitle = 'Sermons';

  sermonCards$ = this.cardService.allWatchCards$
    .pipe(
      map(sermonCards => sermonCards.filter(allCards => allCards.category === 'sermon')
        .sort(sortByDate))
    );

  constructor(private cardService: AllChurchInformationService) { }

  ngOnInit() {
  }

}
