import {Component, computed, inject, OnInit, signal} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {AllChurchInformationService} from "../service/all-church-information.service";
import {convertSpaceToDash, sortByDateCalendar} from "../utils/utils";
import {CalendarEvent} from "../models/sub-models/calendar-events.model";
import {ExtrasService} from "../service/extras.service";
import {Router} from "@angular/router";
import { IonicModule } from '@ionic/angular';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatDateRangeInput, MatStartDate, MatEndDate, MatDatepickerToggle, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply } from '@angular/material/datepicker';
import { FooterComponent } from '../shared-components/footer/footer.component';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.page.html',
    styleUrls: ['./calendar.page.scss'],
    standalone: true,
    imports: [
        IonicModule,
        MatFormField,
        MatLabel,
        MatDateRangeInput,
        FormsModule,
        ReactiveFormsModule,
        MatStartDate,
        MatEndDate,
        MatDatepickerToggle,
        MatSuffix,
        MatDateRangePicker,
        MatDatepickerActions,
        MatDatepickerCancel,
        MatDatepickerApply,
        FooterComponent,
        DatePipe,
    ],
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

  firstDate = signal<Date>(new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()));
  secondDate = signal<Date>(new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate() + 14));

  calendarEventsSignal = computed(() => this.dataService.allChurchInformation()?.allCalendarInformation?.filter(
    event => {
      if (this.secondDate() === null || new Date(this.firstDate()).toDateString() === new Date(this.secondDate()).toDateString()) {
        return new Date(event.date).toDateString() === new Date(this.firstDate()).toDateString();
      }
      return new Date(event.date).getTime() >= this.firstDate().getTime() && new Date(event.date).getTime() <= this.secondDate().getTime()
    }
  ).sort(sortByDateCalendar));

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
    this.firstDate.set(startDate);
    this.secondDate.set(endDate);
  }

  navigateToStandardLayout(calendarEvent: CalendarEvent): void {
    this.navExtras.setCalendarEvent(calendarEvent);
    localStorage.setItem('calendar', JSON.stringify(this.navExtras.getCalendarEvents()));
    console.log(JSON.stringify(this.navExtras.getCalendarEvents()));
    this.router.navigate(['/calendar', convertSpaceToDash(calendarEvent.title)]);
  }

}
