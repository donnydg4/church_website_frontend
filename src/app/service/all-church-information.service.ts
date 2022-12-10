import {Injectable} from '@angular/core';
import {CalendarModel} from "../models/calendar.model";
import {WatchModel} from "../models/watch.model";

@Injectable({
  providedIn: 'root'
})
export class AllChurchInformationService {

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

  watchModel: WatchModel[] = [
    {
      type: 'sermons', description: 'hello',
      date: new Date(2022, 11, 5), title: 'Let it Go', category: 'sermons',
      imageUrl: 'https://ionicframework.com/docs/img/demos/card-media.png',
      videoId: 'fjeif'
    },
    {
      type: 'sermons', description: 'hello',
      date: new Date(2022, 11, 7), title: 'Who are you?', category: 'sermons',
      imageUrl: './assets/2021 devotionals.jpg',
      videoId: 'fjeif'
    },
    {
      type: 'sermons', description: 'hello',
      date: new Date(2022, 11, 6), title: 'Faith Of You', category: 'sermons',
      imageUrl: 'https://ionicframework.com/docs/img/demos/card-media.png',
      videoId: 'fjeif'
    },
    {
      type: 'sermons', description: 'hello',
      date: new Date(2022, 11, 8), title: 'Lets Go', category: 'sermons',
      imageUrl: 'https://ionicframework.com/docs/img/demos/card-media.png',
      videoId: 'fjeif'
    }
  ];

  public getWatchModels() {
    return [...this.watchModel];
  }

  public getCalendar() {
    return [...this.calendarModel];
  }

  constructor() {
  }
}
