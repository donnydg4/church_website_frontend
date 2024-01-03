import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {shareReplay, tap} from "rxjs/operators";
import {BehaviorSubject, Observable, throwError} from "rxjs";
import {AllWebsiteInformationModel} from "../models/all-website-information.model";

@Injectable({
  providedIn: 'root'
})
export class AllChurchInformationService {

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

  allWebsiteInformation$ = this.http.get<AllWebsiteInformationModel>(this.allWebsiteInformationUrl)
    .pipe(
      shareReplay(1)
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
    return throwError(() => errorMessage);
  }
}
