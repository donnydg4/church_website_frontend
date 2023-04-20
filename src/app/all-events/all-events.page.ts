import {Component, Input, OnInit} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {sortByDate, sortByDateEvents} from "../utils/utils";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.page.html',
  styleUrls: ['./all-events.page.scss'],
})
export class AllEventsPage implements OnInit {

  constructor(private dataService: AllChurchInformationService) { }

  selectedCategory: string = 'ALL EVENTS';

  ngOnInit() {
  }

  getAllEvents$ = this.dataService.allEvents$
    .pipe(
      map(events => events.filter(event => event.type === 'event').sort(sortByDateEvents))
    );
}
