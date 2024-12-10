import {Component, computed, inject,} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {NgOptimizedImage} from '@angular/common';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonRange,
  IonRow,
  IonText,
  NavController
} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {logoYoutube, playSkipBackSharp, playSkipForwardSharp} from "ionicons/icons";

@Component({
  selector: 'app-worship',
  templateUrl: './worship.page.html',
  styleUrls: ['./worship.page.scss'],
  standalone: true,
  imports: [NgOptimizedImage, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader,
    IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonText, IonIcon, IonRange, IonList, IonItem, IonLabel, IonNote]
})
export class WorshipPage {

  private dataService = inject(AllChurchInformationService);
  private navCtrl = inject(NavController);
  private sanitizer = inject(DomSanitizer);

  worshipPage = this.dataService.allWebsiteInformationTwo.value;

  fakeArray: string[] = ['5xQEgz7J3RA', 'Xk6LKuqj3Xc', 'qv3-TDdD1pM', '-h9wpvwAF-M'];
  defaultUrl: string = "https://www.youtube.com/embed/";
  youtubeUrl: SafeResourceUrl;

  audio: HTMLAudioElement;

  constructor() {
    this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.defaultUrl + this.fakeArray[0]);
    addIcons({logoYoutube, playSkipBackSharp, playSkipForwardSharp})
  }

  navigateToPage(type: string) {
    this.navCtrl.navigateForward([type]);
  }

  openVideoModal(id: number) {
    console.log(this.youtubeUrl);
  }

  play() {

  }
}
