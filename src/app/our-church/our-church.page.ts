import {Component, HostListener, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";
import {Platform} from "@ionic/angular";
import {History} from "../models/sub-models/history.model";

@Component({
  selector: 'app-our-church',
  templateUrl: './our-church.page.html',
  styleUrls: ['./our-church.page.scss'],
})
export class OurChurchPage {

  public platformWidth = this.platform.width()

  selectedSegment: string = 'history';
  historyItems = signal<History>({
    title: '',
    subTitle: '',
    individualHistoryObject: []
  });

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.platformWidth = this.platform.width();
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.currentTarget.value;
    console.log(this.selectedSegment);
  }

  constructor(private dataService: AllChurchInformationService, private platform: Platform) {
  }

  ourChurch$ = this.dataService.allWebsiteInformation$
    .pipe(
      tap(data => {
        this.historyItems.set(data.allWebsiteInformation.ourChurch.history);
        console.log(data.allWebsiteInformation.ourChurch.history);
      }),
      map(data => data.allWebsiteInformation.ourChurch)
    );
}
