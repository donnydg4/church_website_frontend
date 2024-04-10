import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {shareReplay, tap} from "rxjs/operators";
import {AllWebsiteInformationModel} from "../models/all-website-information.model";
import {toSignal} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class AllChurchInformationService {

  private httpClient = inject(HttpClient)

  // private allWatchCardsUrl: string = 'http://localhost:8080/church/watchCards';
  // private allSeriesCardsUrl: string = 'http://localhost:8080/church/seriesCards';
  // private allCalendarEventsUrl: string = 'http://localhost:8080/church/website/calendar';
  // private allEventsUrl: string = 'http://localhost:8080/church/website/events'
  private allWebsiteInformationUrl: string = 'http://localhost:8080/church/website/allWebsiteInformation';

  // private allWatchCardsUrl: string = 'https://church-rest-service.herokuapp.com/church/watchCards';
  // private allSeriesCardsUrl: string = 'https://church-rest-service.herokuapp.com/church/seriesCards';
  // private allCalendarEventsUrl: string = 'https://church-rest-service.herokuapp.com/church/website/calendar';
  // private allEventsUrl: string = 'https://church-rest-service.herokuapp.com/church/website/events';
  // private allDisplayCardsUrl: string = 'https://church-rest-service.herokuapp.com/church/displayCards';
  // private allWebsiteInformationUrl: string = 'https://church-rest-service.herokuapp.com/church/website/allWebsiteInformation';

  searchQueryWord(search: string) {
    this.searchQuerySignal.set(search);
  }

  //signal
  searchQuerySignal = signal('');

  //http call
  private allWebsiteInformation$ = this.httpClient.get<AllWebsiteInformationModel>(this.allWebsiteInformationUrl)
    .pipe(
      tap(data => console.log(data)),
      shareReplay(1)
    );

  //convert http call to signal
  allChurchInformation = toSignal(this.allWebsiteInformation$, {initialValue: {} as AllWebsiteInformationModel});

}
