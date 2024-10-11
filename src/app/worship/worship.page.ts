import {Component, computed, inject, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {AllChurchInformationService} from "../service/all-church-information.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-worship',
  templateUrl: './worship.page.html',
  styleUrls: ['./worship.page.scss'],
})
export class WorshipPage {

  private dataService = inject(AllChurchInformationService);
  private navCtrl = inject(NavController);
  private sanitizer = inject(DomSanitizer);

  homeInfo = computed(() => this.dataService.allChurchInformation().allWebsiteInformation?.homePage);

  fakeArray: string[] = ['5xQEgz7J3RA', 'Xk6LKuqj3Xc', 'qv3-TDdD1pM','-h9wpvwAF-M'];
  defaultUrl: string = "https://www.youtube.com/embed/";
  youtubeUrl: SafeResourceUrl;

  constructor() {
    this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.defaultUrl + this.fakeArray[0]);
  }

  navigateToPage(type: string) {
    this.navCtrl.navigateForward([type]);
  }

  openVideoModal(id: number){
    console.log(this.youtubeUrl);
  }
}
