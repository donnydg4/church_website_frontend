import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {shareReplay} from "rxjs/operators";
import {BehaviorSubject} from "rxjs";
import {AllWebsiteInformationModel} from "../models/all-website-information.model";

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

  private searchQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');
  searchQueryAction$ = this.searchQuery.asObservable();

  searchQueryWord(search: string) {
    this.searchQuery.next(search);
  }

  allWebsiteInformation$ = this.httpClient.get<AllWebsiteInformationModel>(this.allWebsiteInformationUrl)
    .pipe(
      shareReplay(1)
    );

}
