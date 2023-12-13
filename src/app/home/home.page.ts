import {Component, signal} from '@angular/core';
import {NavController} from "@ionic/angular";
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";
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
        this.waysToEngage.set(data.allWebsiteInformation.homePage.waysToEngage);
      }),
      map(data => data.allWebsiteInformation.homePage)
    );

  navigateToPage(type: string) {
    this.navCtrl.navigateForward([type]);
  }

}
