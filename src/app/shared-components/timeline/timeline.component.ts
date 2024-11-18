import {Component, Input} from '@angular/core';
import {History} from "../../models/sub-models/history.model";
import { IonicModule } from '@ionic/angular';
import { NgClass, DatePipe } from '@angular/common';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgClass,
        DatePipe,
    ],
})
export class TimelineComponent {

  @Input() items: History;

  constructor() { }
}
