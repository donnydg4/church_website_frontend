import {Component, HostListener, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {OurChurchModel} from "../models/sub-models/our-church.model";
import {map, tap} from "rxjs/operators";
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-our-church',
  templateUrl: './our-church.page.html',
  styleUrls: ['./our-church.page.scss'],
})
export class OurChurchPage {

  public platformWidth = this.platform.width()

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.platformWidth = this.platform.width();
  }

  constructor(private dataService: AllChurchInformationService, private platform: Platform) {
  }

  ourChurch$ = this.dataService.allWebsiteInformation$
    .pipe(
      tap(data => data.allWebsiteInformation.ourChurch),
      map(data => data.allWebsiteInformation.ourChurch)
    );
}
