import {Component, computed, inject, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";
import {MainEventModel} from "../models/sub-models/main-event.model";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.page.html',
  styleUrls: ['./all-events.page.scss'],
})
export class AllEventsPage {

  private dataService = inject(AllChurchInformationService);

  // eventsInfo = signal<MainEventModel>({events: []});

  // private getAllEvents$ = toObservable(this.dataService.allChurchInformation).pipe(
  //   tap(data => this.eventsInfo.set(data.mainEvents)),
  //   map(events => events.mainEvents.events
  //     .filter(event => event.type === 'event')
  //     .filter(event => {
  //       return new Date(event.date).getTime() >= new Date().setHours(0,0,0,0);
  //     })
  //   ));

  //create two signals
  getAllEvents = computed(() => this.dataService.allChurchInformation()?.mainEvents?.events
    .filter(event => event.type === 'event')
    .filter(event => {
      return new Date(event.date).getTime() >= new Date().setHours(0,0,0,0);
    })
  );

  eventsInfo = computed(() => this.dataService.allChurchInformation().mainEvents);


  //signal created from observables
  // getAllEvents = toSignal(this.getAllEvents$);
}
