import {Component, computed, HostListener, inject, signal} from '@angular/core';
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

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.platformWidth = this.platform.width();
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.currentTarget.value;
    console.log(this.selectedSegment);
  }

  //signals which replaced rxjs
  historyItems = computed(() => this.dataService.allChurchInformation().allWebsiteInformation?.ourChurch?.history);
  ourChurch = computed(() => this.dataService.allChurchInformation().allWebsiteInformation?.ourChurch);
}
