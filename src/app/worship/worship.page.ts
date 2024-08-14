import {Component, computed, inject, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {AllChurchInformationService} from "../service/all-church-information.service";

@Component({
  selector: 'app-worship',
  templateUrl: './worship.page.html',
  styleUrls: ['./worship.page.scss'],
})
export class WorshipPage {

  private dataService = inject(AllChurchInformationService);
  private navCtrl = inject(NavController);

  homeInfo = computed(() => this.dataService.allChurchInformation().allWebsiteInformation?.homePage);

  navigateToPage(type: string) {
    this.navCtrl.navigateForward([type]);
  }
}
