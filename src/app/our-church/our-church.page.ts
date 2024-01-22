import {Component, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {OurChurchModel} from "../models/sub-models/our-church.model";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-our-church',
  templateUrl: './our-church.page.html',
  styleUrls: ['./our-church.page.scss'],
})
export class OurChurchPage {

  ourChurchInfo = signal<OurChurchModel>({
    coverPhoto: '',
    ourMission: [],
    ourTarget: [],
    ourVision: [],
    coreValues: [],
    title: ''
  });

  constructor(private dataService: AllChurchInformationService) {
  }

  ourChurch$ = this.dataService.allWebsiteInformation$
    .pipe(
      tap(data => data.allWebsiteInformation.ourChurch),
      map(data => data.allWebsiteInformation.ourChurch)
    );
}
