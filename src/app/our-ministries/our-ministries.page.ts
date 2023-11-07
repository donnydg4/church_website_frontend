import {Component, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";
import {sortByCardCategory} from "../utils/utils";
import {LeadershipModel} from "../models/sub-models/leadership.model";
import {OurMinistriesModel} from "../models/sub-models/our-ministries.model";

@Component({
  selector: 'app-our-ministries',
  templateUrl: './our-ministries.page.html',
  styleUrls: ['./our-ministries.page.scss'],
})
export class OurMinistriesPage {

  ourMinistries = signal<OurMinistriesModel>({});

  constructor(private dataService: AllChurchInformationService) {
  }

  displayOurMinistryCards$ = this.dataService.allWebsiteInformation$
    .pipe(
      tap(data => this.ourMinistries.set(data.ourMinistriesPage)),
      map(ourMinistryPageInfo => ourMinistryPageInfo.ourMinistriesPage.displayCards.filter(ourMinistries => ourMinistries.type === "OUR MINISTRY").sort(sortByCardCategory))
    );
}



