import {Component, Input} from '@angular/core';
import {History} from "../../models/sub-models/history.model";
import {DatePipe, NgClass} from '@angular/common';
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from "@ionic/angular/standalone";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  standalone: true,
  imports: [
    IonCard, IonCardHeader,
    IonCardSubtitle, IonCardTitle, IonCardContent,
    NgClass,
    DatePipe,
  ],
})
export class TimelineComponent {

  @Input() items: History;

  constructor() {
  }
}
