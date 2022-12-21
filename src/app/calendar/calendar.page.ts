import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AllChurchInformationService} from "../service/all-church-information.service";
import {CalendarModel} from "../models/calendar.model";
import {BehaviorSubject, combineLatest} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  dateRange: FormGroup;
  minDate: Date;
  maxDate: Date;
  twoWeeksDate: Date;
  options = {weekday: 'long'} as const;
  weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  date = new Date();

  //CalendarEvents subjects
  private beginningDateSubject: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()));
  beginningDateAction$ = this.beginningDateSubject.asObservable();

  private endDateSubject: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate() + 14));
  endDateAction$ = this.endDateSubject.asObservable();

  calendarEvents$ = combineLatest([
    this.dataService.allCalendarEvents$,
    this.beginningDateAction$,
    this.endDateAction$
  ])
    .pipe(
      map(([calendarEvents, firstDate, secondDate]) => calendarEvents.filter(
        event => {
          if (secondDate === null) {
            return new Date(event.date).getTime() === firstDate.getTime();
          }
            return new Date(event.date).getTime() >= firstDate.getTime() && new Date(event.date).getTime() <= secondDate.getTime()
        }
    )));

  constructor(private dataService: AllChurchInformationService) {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth(); //getMonth starts at 0
    const currentDate = date.getDate();

    this.minDate = new Date(currentYear, currentMonth, currentDate);
    this.twoWeeksDate = new Date(currentYear, currentMonth, currentDate + 14);
    this.maxDate = new Date(currentYear, currentMonth, currentDate + 21);
  }

  ngOnInit() {
    this.dateRange = new FormGroup({
      start: new FormControl<Date | null>(this.minDate),
      end: new FormControl<Date | null>(this.twoWeeksDate)
    });
  }

  dateChanged() {
    const startDate: Date = this.dateRange.get('start').value;
    const endDate: Date = this.dateRange.get('end').value;

    console.log(startDate);
    console.log(endDate);

    this.selectDateRange(startDate, endDate);

  }

  selectDateRange(startDate?: Date, endDate?: Date) {
    this.beginningDateSubject.next(startDate);
    this.endDateSubject.next(endDate);
  }

}
