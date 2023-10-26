import {Injectable} from '@angular/core';
import {CalendarModel} from "../models/sub-models/calendar.model";
import {WatchModel} from "../models/sub-models/watch.model";
import {HttpClient} from "@angular/common/http";
import {catchError, shareReplay, tap} from "rxjs/operators";
import {BehaviorSubject, Observable, throwError} from "rxjs";
import {SeriesCardModel} from "../models/sub-models/series-card.model";
import {MainEventModel} from "../models/sub-models/main-event-model";
import {DisplayCardModel} from "../models/sub-models/display-card.model";
import {AllWebsiteInformationModel} from "../models/all-website-information.model";

@Injectable({
  providedIn: 'root'
})
export class AllChurchInformationService {

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
  // private allWebsiteInformationUrl: string = 'http://church-rest-service.herokuapp.com/church/website/allWebsiteInformation';


  private searchQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');
  searchQueryAction$ = this.searchQuery.asObservable();

  searchQueryWord(search: string) {
    this.searchQuery.next(search);
  }

  allWebsiteInformation$ = this.http.get<AllWebsiteInformationModel>(this.allWebsiteInformationUrl)
    .pipe(
      tap(data => console.log(data))
    )

  // allWatchCards$ = this.http.get<WatchModel[]>(this.allWatchCardsUrl)
  //   .pipe(
  //     shareReplay(1),
  //     tap(data => console.log(data)),
  //     catchError(AllChurchInformationService.handleError)
  //   );
  //
  // allSeriesCards$ = this.http.get<SeriesCardModel[]>(this.allSeriesCardsUrl)
  //   .pipe(
  //     shareReplay(1),
  //     catchError(AllChurchInformationService.handleError)
  //   );
  //
  // allCalendarEvents$ = this.http.get<CalendarModel[]>(this.allCalendarEventsUrl)
  //   .pipe(
  //     shareReplay(1),
  //     catchError(AllChurchInformationService.handleError)
  //   );
  //
  // allEvents$ = this.http.get<MainEventModel[]>(this.allEventsUrl)
  //   .pipe(
  //     shareReplay(1),
  //     catchError(AllChurchInformationService.handleError),
  //     tap(data => console.log(data))
  //   );
  //
  // allDisplayCards$ = this.http.get<DisplayCardModel[]>(this.allDisplayCardsUrl)
  //   .pipe(
  //     shareReplay(1),
  //     catchError(AllChurchInformationService.handleError),
  //     tap(data => console.log(data))
  //   );


  constructor(private http: HttpClient) {
  }

  private static handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to thgit ae console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(() => errorMessage);
  }
}
