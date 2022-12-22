import {Injectable} from '@angular/core';
import {CalendarModel} from "../models/calendar.model";
import {WatchModel} from "../models/watch.model";
import {HttpClient} from "@angular/common/http";
import {catchError, shareReplay, tap} from "rxjs/operators";
import {BehaviorSubject, Observable, Subject, throwError} from "rxjs";
import {SeriesCardModel} from "../models/series-card.model";

@Injectable({
  providedIn: 'root'
})
export class AllChurchInformationService {

  private allWatchCardsUrl: string = 'http://localhost:8080/website/watchCards';
  private allSeriesCardsUrl: string = 'http://localhost:8080/website/seriesCards';
  private allCalendarEventsUrl: string = 'http://localhost:8080/website/calendar';

  private searchQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');
  searchQueryAction$ = this.searchQuery.asObservable();

  searchQueryWord(search: string) {
    this.searchQuery.next(search);
  }

  allWatchCards$ = this.http.get<WatchModel[]>(this.allWatchCardsUrl)
    .pipe(
      shareReplay(1),
      tap(data => console.log(data)),
      catchError(AllChurchInformationService.handleError)
    );

  allSeriesCards$ = this.http.get<SeriesCardModel[]>(this.allSeriesCardsUrl)
    .pipe(
      shareReplay(1),
      catchError(AllChurchInformationService.handleError)
    );

  allCalendarEvents$ = this.http.get<CalendarModel[]>(this.allCalendarEventsUrl)
    .pipe(
      shareReplay(1),
      catchError(AllChurchInformationService.handleError)
    );


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
    return throwError(errorMessage);
  }
}
