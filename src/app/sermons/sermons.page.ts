import {Component, OnInit} from '@angular/core';
import {WatchModel} from "../models/watch.model";
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.page.html',
  styleUrls: ['./sermons.page.scss'],
})
export class SermonsPage implements OnInit {

  sermonTitle = 'Sermons';

  sermonCards$ = this.cardService.allWatchCards$
    .pipe(
      map(sermonCards => sermonCards.filter(allCards => allCards.category === 'sermon'))
    );

  constructor(private cardService: AllChurchInformationService) { }

  ngOnInit() {
  }

}
