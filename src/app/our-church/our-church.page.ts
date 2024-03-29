import {Component, HostListener, inject, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";
import {Platform} from "@ionic/angular";
import {History} from "../models/sub-models/history.model";
import {sortByDateHistory} from "../utils/utils";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-our-church',
  templateUrl: './our-church.page.html',
  styleUrls: ['./our-church.page.scss'],
})
export class OurChurchPage {

  private dataService = inject(AllChurchInformationService);
  private platform = inject(Platform);

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

  //rxjs to modify
  ourChurch$ = toObservable(this.dataService.allChurchInformation)
    .pipe(
      tap(data => {
        data.allWebsiteInformation.ourChurch.history.individualHistoryObject.sort(sortByDateHistory);
        this.historyItems.set(data.allWebsiteInformation.ourChurch.history);
        console.log(data.allWebsiteInformation.ourChurch.history);
      }),
      map(data => data.allWebsiteInformation.ourChurch)
    );

  //rxjs to signal
  ourChurch = toSignal(this.ourChurch$);
}
