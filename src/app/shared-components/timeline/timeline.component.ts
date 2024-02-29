import {Component, Input} from '@angular/core';
import {History} from "../../models/sub-models/history.model";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {

  @Input() items: History;

  constructor() { }
}
