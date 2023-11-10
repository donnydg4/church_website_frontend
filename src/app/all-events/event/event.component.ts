import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {MainEventModel} from "../../models/sub-models/main-event-model";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent {

  @Input() eventsArray: Observable<MainEventModel[]>;
  @Input() selectedCategory: string = '';

  constructor() { }


}
