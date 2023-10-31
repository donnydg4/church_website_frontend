import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {MainEventModel} from "../../models/sub-models/main-event-model";
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {

  @Input() eventsArray: Observable<MainEventModel[]>;
  @Input() selectedCategory: string = '';

  public platformWidth = this.platform.width();

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.platformWidth = this.platform.width();
    console.log(this.platformWidth);
  }

  constructor(private platform: Platform) { }

  ngOnInit() {}

  clickMe(): void {
    console.log('clicked!');
  }

}
