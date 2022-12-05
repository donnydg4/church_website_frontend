import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {D} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  minDate: Date;
  maxDate: Date;
  twoWeeksDate: Date;

  constructor() {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth(); //getMonth starts at 0
    const currentDate = date.getDate();

    console.log(currentYear, currentMonth, currentDate)
    this.minDate = new Date(currentYear, currentMonth, currentDate);
    this.twoWeeksDate = new Date(currentYear, currentMonth, currentDate + 14);
    this.maxDate = new Date(currentYear, currentMonth + 1, currentDate);
  }

  ngOnInit() {
  }

}
