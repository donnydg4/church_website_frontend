import {Injectable} from '@angular/core';
import {CalendarModel} from "../models/calendar.model";
import {WatchModel} from "../models/watch.model";
import {HttpClient} from "@angular/common/http";
import {catchError, shareReplay, tap} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {SeriesCardModel} from "../models/series-card.model";

@Injectable({
  providedIn: 'root'
})
export class AllChurchInformationService {

  private allWatchCardsUrl: string = 'http://localhost:8080/website/watchCards';
  private allSeriesCardsUrl: string = 'http://localhost:8080/website/seriesCards';

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

  calendarModel: CalendarModel[] = [{
    date: new Date(2022, 11, 5), events: [
      {title: 'hello', description: '8:00pm @ hello'},
      {title: 'something', description: '6:30pm @ something'}]
  },
    {
      date: new Date(2022, 11, 6), events: [
        {title: 'giving', description: '5:00pm @ giving'},
        {title: 'teeth', description: '5:00pm @ teeth'},
        {title: 'gaming', description: '5:00pm @ gaming'},
      ]
    },
    {
      date: new Date(2022, 11, 8), events: [
        {title: 'Christmas Community Outreach', description: '5:00pm @ fasting'},
        {title: 'July 4th Community Outreach', description: '5:00pm @ gui'},
        {title: 'Thanksgiving Community Outreach', description: '5:00pm @ sleeping'},
      ]
    },
    {
      date: new Date(2022, 11, 17), events: [
        {title: 'Guest Speaker: Ivan Tait', description: '5:00pm @ asdf'},
        {title: 'Worship Night', description: '5:00pm @ reter'},
        {title: 'Guest Speaker: Craig', description: '5:00pm @ qwerty'},
        {title: 'Guest Speaker: Ivan Tait', description: '5:00pm @ vgrf'},
      ]
    }
  ];

  public getCalendar() {
    return [...this.calendarModel];
  }

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
