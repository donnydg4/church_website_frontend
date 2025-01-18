import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AllWebsiteInformationModel} from "../models/all-website-information.model";
import {rxResource} from "@angular/core/rxjs-interop";
import {CalendarEvent} from "../models/sub-models/calendar-events.model";
import {CalendarModel} from "../models/sub-models/calendar.model";
import {sortByDateEvent} from "../utils/utils";

@Injectable({
  providedIn: 'root'
})
export class AllChurchInformationService {

  private httpClient = inject(HttpClient)

  // private allWatchCardsUrl: string = 'http://localhost:8080/church/watchCards';
  // private allSeriesCardsUrl: string = 'http://localhost:8080/church/seriesCards';
  // private allCalendarEventsUrl: string = 'http://localhost:8080/church/website/calendar';
  // private allEventsUrl: string = 'http://localhost:8080/church/website/events'
  // private allWebsiteInformationUrl: string = 'http://localhost:8080/church/website/allWebsiteInformation';

  // private allWatchCardsUrl: string = 'https://church-rest-service.herokuapp.com/church/watchCards';
  // private allSeriesCardsUrl: string = 'https://church-rest-service.herokuapp.com/church/seriesCards';
  // private allCalendarEventsUrl: string = 'https://church-rest-service.herokuapp.com/church/website/calendar';
  // private allEventsUrl: string = 'https://church-rest-service.herokuapp.com/church/website/events';
  // private allDisplayCardsUrl: string = 'https://church-rest-service.herokuapp.com/church/displayCards';
  private allWebsiteInformationUrl: string = 'https://church-rest-service.herokuapp.com/church/website/allWebsiteInformation';

  searchQueryWord(search: string) {
    this.searchQuerySignal.set(search);
  }

  //signal
  searchQuerySignal = signal('');

  // //http call
  // private allWebsiteInformation$ = this.httpClient.get<AllWebsiteInformationModel>(this.allWebsiteInformationUrl)
  //   .pipe(
  //     shareReplay(1),
  //     tap(data => console.log(data))
  //   );

  //async rxresource call
  allWebsiteInformationTwo = rxResource({
    loader: () => this.httpClient.get<AllWebsiteInformationModel>(this.allWebsiteInformationUrl)
  });
  //
  // eff = effect(() => {
  //   console.log('Status:', ResourceStatus[this.allWebsiteInformationTwo.status()]);
  //   console.log('Value: ', this.allWebsiteInformationTwo.value());
  // })

  // //convert http call to signal
  // allChurchInformation = toSignal(this.allWebsiteInformation$, {initialValue: {} as AllWebsiteInformationModel});


  // featuredEvents = computed(() =>
  //   this.allChurchInformation()
  //     ?.allCalendarInformation
  //     ?.reduce((acc: CalendarEvent[], cur: CalendarModel) => [...acc, ...cur.events], [] as CalendarEvent[])
  //     .filter((event: CalendarEvent) =>
  //       event.type === 'event' &&
  //       event.featured === true &&
  //       event.startDate && new Date(event.startDate).getTime() >= new Date().setHours(0, 0, 0, 0))
  //     .sort(sortByDateEvent)
  // );

  featuredEventsTwo = computed(() =>
    this.allWebsiteInformationTwo.value()?.allCalendarInformation?.reduce((acc: CalendarEvent[], cur: CalendarModel) => [...acc, ...cur.events], [] as CalendarEvent[]).filter((event: CalendarEvent) =>
        event.type === 'event' &&
        event.featured === true &&
        event.startDate &&
        (event.endDate ? (new Date(event.endDate).getTime() >= new Date().setHours(0, 0, 0, 0) ? event.endDate : new Date(event.startDate).getTime() >= new Date().setHours(0, 0, 0, 0)) : new Date(event.startDate).getTime() >= new Date().setHours(0, 0, 0, 0)))
      .sort(sortByDateEvent)
  );


}
