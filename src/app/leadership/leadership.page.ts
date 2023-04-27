import { Component, OnInit } from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.page.html',
  styleUrls: ['./leadership.page.scss'],
})
export class LeadershipPage {

  constructor(private dataService: AllChurchInformationService) { }

  selectedCategory: string = 'LEADERSHIP'

  leadershipCards$ = this.dataService.allDisplayCards$
    .pipe(
      map(leadershipCards => leadershipCards.filter(leadershipCard => leadershipCard.type === 'CHURCH LEADERSHIP'))
    );
}
