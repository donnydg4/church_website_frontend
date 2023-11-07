import {Component, OnInit, signal} from '@angular/core';
import {OurMinistriesModel} from "../models/sub-models/our-ministries.model";
import {BusinessesWeSupportModel} from "../models/sub-models/businesses-we-support.model";
import {map, tap} from "rxjs/operators";
import {sortByCardCategory} from "../utils/utils";
import {AllChurchInformationService} from "../service/all-church-information.service";

@Component({
  selector: 'app-businesses-we-support',
  templateUrl: './businesses-we-support.page.html',
  styleUrls: ['./businesses-we-support.page.scss'],
})
export class BusinessesWeSupportPage {

  businessesWeSupport = signal<BusinessesWeSupportModel>({});

  constructor(private dataService: AllChurchInformationService) { }

  displayBusinessCards$ = this.dataService.allWebsiteInformation$
    .pipe(
      tap(data => this.businessesWeSupport.set(data.businessesWeSupportPage)),
      map(businessInfo => businessInfo.businessesWeSupportPage.displayCards.filter(businessCards => businessCards.type === "BUSINESS").sort(sortByCardCategory))
    );

}
