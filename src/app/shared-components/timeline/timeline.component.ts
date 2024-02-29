import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IndividualHistoryModel} from "../../models/sub-models/individual-history.model";
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
