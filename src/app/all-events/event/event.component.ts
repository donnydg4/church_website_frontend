import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {MainEventModel} from "../../models/main-event-model";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {

  @Input() eventsArray: Observable<MainEventModel[]>

  constructor() { }

  ngOnInit() {}

}
