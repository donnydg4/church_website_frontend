import {Component} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {sortByDateEvents} from "../utils/utils";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.page.html',
  styleUrls: ['./all-events.page.scss'],
})
export class AllEventsPage {

  constructor(private dataService: AllChurchInformationService) { }

  selectedCategory: string = 'ALL EVENTS';

  getAllEvents$ = this.dataService.allWebsiteInformation$
    .pipe(
      map(events => events.mainEvents.filter(event => event.type === 'event').sort(sortByDateEvents))
    );
}
