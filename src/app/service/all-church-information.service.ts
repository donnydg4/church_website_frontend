import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AllWebsiteInformationModel} from "../models/all-website-information.model";
import {rxResource} from "@angular/core/rxjs-interop";
import {CalendarEvent} from "../models/sub-models/calendar-events.model";
import {CalendarModel} from "../models/sub-models/calendar.model";
import {setErrorMessage, sortByDateEvent} from "../utils/utils";

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

  //async rxresource call
  allWebsiteInformationTwo = rxResource({
    loader: () => this.httpClient.get<AllWebsiteInformationModel>(this.allWebsiteInformationUrl)
  });

  error = computed(() => this.allWebsiteInformationTwo.error() as HttpErrorResponse);
  errorMessage = computed(() => setErrorMessage(this.error(),'church'));

  featuredEventsTwo = computed(() =>
    this.allWebsiteInformationTwo.value()?.allCalendarInformation?.reduce((acc: CalendarEvent[], cur: CalendarModel) => [...acc, ...cur.events], [] as CalendarEvent[]).filter((event: CalendarEvent) =>
        event.type === 'event' &&
        event.featured === true &&
        event.startDate &&
        (event.endDate ? (new Date(event.endDate).getTime() >= new Date().setHours(0, 0, 0, 0) ? event.endDate : new Date(event.startDate).getTime() >= new Date().setHours(0, 0, 0, 0)) : new Date(event.startDate).getTime() >= new Date().setHours(0, 0, 0, 0)))
      .sort(sortByDateEvent)
  );


}
