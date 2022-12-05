import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {D} from "@angular/cdk/keycodes";
import {FormControl, FormGroup} from "@angular/forms";

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
  title: string = 'Christmas Community Outreach'
  dateTime: string = "4:30pm @ The Father's House Church"


  constructor() {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth(); //getMonth starts at 0
    const currentDate = date.getDate();

    console.log(currentYear, currentMonth, currentDate)
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

}
