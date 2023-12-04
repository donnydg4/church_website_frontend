import {Component, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";
import {MinistriesWeSupportModel} from "../models/sub-models/ministries-we-support.model";

@Component({
  selector: 'app-ministries-we-support',
  templateUrl: './ministries-we-support.page.html',
  styleUrls: ['./ministries-we-support.page.scss'],
})
export class MinistriesWeSupportPage {

  ministriesWeSupportInfo = signal<MinistriesWeSupportModel>({});

  displayMinistriesWeSupportCards$ = this.dataService.allWebsiteInformation$
    .pipe(
      tap(data => this.ministriesWeSupportInfo.set(data.ministriesWeSupportPage)),
      map(ministriesWeSupportInfo => ministriesWeSupportInfo.ministriesWeSupportPage.displayCards));

  constructor(private dataService: AllChurchInformationService) {
  }


}
