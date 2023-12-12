import {Component, signal} from '@angular/core';
import {NavController} from "@ionic/angular";
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";
import {sortByDateEvents} from "../utils/utils";
import {OurMinistriesModel} from "../models/sub-models/our-ministries.model";
import {MinistriesWeSupportModel} from "../models/sub-models/ministries-we-support.model";
import {BusinessesWeSupportModel} from "../models/sub-models/businesses-we-support.model";
import {MissionsModel} from "../models/sub-models/missions.model";
import {MainEventModel} from "../models/sub-models/main-event.model";
import {WaysToEngageModel} from "../models/sub-models/ways-to-engage.model";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController, private dataService: AllChurchInformationService) {
  }

  waysToEngage = signal<WaysToEngageModel[]>([])

  homeInformation$ = this.dataService.allWebsiteInformation$
    .pipe(
      tap(data => {
        this.waysToEngage.set([
          {type: '/missions', imageUrl: `${data.missionsPage.coverPhoto}`, description: 'MISSIONS'},
          {type: '/our-ministries', imageUrl: `${data.ourMinistriesPage.coverPhoto}`, description: 'OUR MINISTRIES'},
          {type: '/sermons', imageUrl: `${data.ourMinistriesPage.coverPhoto}`, description: 'MESSAGES'},
          {type: '/events', imageUrl: `${data.mainEvents.coverPhoto}`, description: 'ALL EVENTS'},
          {type: '/connect', imageUrl: `${data.mainEvents.coverPhoto}`, description: 'CONTACT US'},
          {type: '/our-church', imageUrl: `${data.leadershipPage.coverPhoto}`, description: 'OUR CHURCH'},
        ])
      }),
      map(data => data.allWebsiteInformation.homePage)
    );

  navigateToPage(type: string) {
    this.navCtrl.navigateForward([type]);
  }

}
