import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AllChurchInformationService} from "../service/all-church-information.service";
import {CalendarModel} from "../models/calendar.model";

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
  calendarEvents: CalendarModel[] = this.calendarArray.getCalendar();
  options = { weekday: 'long' } as const;



  constructor(private calendarArray: AllChurchInformationService) {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth(); //getMonth starts at 0
    const currentDate = date.getDate();

    console.log(currentYear, currentMonth, currentDate)
    this.minDate = new Date(currentYear, currentMonth, currentDate);
    this.twoWeeksDate = new Date(currentYear, currentMonth, currentDate + 14);
    this.maxDate = new Date(currentYear, currentMonth, currentDate + 21);

    console.log(this.calendarEvents);

  }

  ngOnInit() {
    this.dateRange = new FormGroup({
      start: new FormControl<Date | null>(this.minDate),
      end: new FormControl<Date | null>(this.twoWeeksDate)
    });
  }



}
