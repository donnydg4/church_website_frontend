import {Component, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";
import {MainEventModel} from "../models/sub-models/main-event.model";

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.page.html',
  styleUrls: ['./all-events.page.scss'],
})
export class AllEventsPage {

  eventsInfo = signal<MainEventModel>({events: []});

  constructor(private dataService: AllChurchInformationService) {
  }

  getAllEvents$ = this.dataService.allWebsiteInformation$
    .pipe(
      tap(data => this.eventsInfo.set(data.mainEvents)),
      map(events => events.mainEvents.events
        .filter(event => event.type === 'event')
        .filter(event => {
          return new Date(event.date).getTime() >= new Date().setHours(0,0,0,0);
        })
      )
    );
}
