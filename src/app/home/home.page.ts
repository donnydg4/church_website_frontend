import {Component} from '@angular/core';
import {NavController} from "@ionic/angular";
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";
import {sortByDateEvents} from "../utils/utils";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController, private dataService: AllChurchInformationService) {
  }

  homeInformation$ = this.dataService.allWebsiteInformation$
    .pipe(
      map(data => data.allWebsiteInformation.homePage)
    );

  getAllEvents$ = this.dataService.allWebsiteInformation$
    .pipe(
      map(events => events.mainEvents.events.filter(event => event.type === 'event').sort(sortByDateEvents))
    );

  navigateToPage(type: string) {
    this.navCtrl.navigateForward([type]);
  }

}
