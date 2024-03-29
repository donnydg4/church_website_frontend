import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AllChurchInformationService} from "../service/all-church-information.service";
import {BehaviorSubject, combineLatest} from "rxjs";
import {map} from "rxjs/operators";
import {convertSpaceToDash, sortByDateCalendar} from "../utils/utils";
import {CalendarEvent} from "../models/sub-models/calendar-events.model";
import {ExtrasService} from "../service/extras.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  private dataService = inject(AllChurchInformationService);
  private router = inject(Router);
  private navExtras = inject(ExtrasService);

  dateRange: FormGroup;
  minDate: Date;
  maxDate: Date;
  twoWeeksDate: Date;
  date = new Date();

  //TODO: Figure out how to incorporate signals here maybe?

  //CalendarEvents subjects
  // private beginningDateSubject: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()));
  // beginningDateAction$ = this.beginningDateSubject.asObservable();
  //
  // private endDateSubject: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate() + 14));
  // endDateAction$ = this.endDateSubject.asObservable();

  firstDate = signal<Date>(new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()));
  secondDate = signal<Date>(new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate() + 14));

  calendarEventsSignal = computed(() => this.dataService.allChurchInformation().allCalendarInformation.filter(
    event => {
      if (this.secondDate() === null || new Date(this.firstDate()).toDateString() === new Date(this.secondDate()).toDateString()) {
        return new Date(event.date).toDateString() === new Date(this.firstDate()).toDateString();
      }
      return new Date(event.date).getTime() >= this.firstDate().getTime() && new Date(event.date).getTime() <= this.secondDate().getTime()
    }
  ).sort(sortByDateCalendar));

  // calendarEvents$ = combineLatest([
  //   this.dataService.allWebsiteInformationForCalendar$,
  //   this.beginningDateAction$,
  //   this.endDateAction$
  // ])
  //   .pipe(
  //     map(([calendarEvents, firstDate, secondDate]) => calendarEvents.allCalendarInformation.filter(
  //       event => {
  //         if (secondDate === null || new Date(firstDate).toDateString() === new Date(secondDate).toDateString()) {
  //           return new Date(event.date).toDateString() === new Date(firstDate).toDateString();
  //         }
  //         return new Date(event.date).getTime() >= firstDate.getTime() && new Date(event.date).getTime() <= secondDate.getTime()
  //       }
  //     ).sort(sortByDateCalendar))
  //   );

  constructor() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth(); //getMonth starts at 0
    const currentDate = date.getDate();

    this.minDate = new Date(currentYear, currentMonth, currentDate);
    this.twoWeeksDate = new Date(currentYear, currentMonth, currentDate + 14);
    this.maxDate = new Date(currentYear, currentMonth, currentDate + 28);
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

    this.selectDateRange(startDate, endDate);
  }

  selectDateRange(startDate?: Date, endDate?: Date) {
    // this.beginningDateSubject.next(startDate);
    // this.endDateSubject.next(endDate);
    this.firstDate.set(startDate);
    this.secondDate.set(endDate);
  }

  navigateToStandardLayout(calendarEvent: CalendarEvent): void {
    this.navExtras.setCalendarEvent(calendarEvent);
    localStorage.setItem('calendar', JSON.stringify(this.navExtras.getCalendarEvents()));
    this.router.navigate(['/calendar', convertSpaceToDash(calendarEvent.title)]);
  }

}
