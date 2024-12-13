import {Component, HostListener, inject, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
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
  IonLabel,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonText,
  Platform
} from "@ionic/angular/standalone";
import {NgOptimizedImage} from '@angular/common';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconButton} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';
import {TimelineComponent} from '../shared-components/timeline/timeline.component';
import {FooterComponent} from '../shared-components/footer/footer.component';

@Component({
  selector: 'app-our-church',
  templateUrl: './our-church.page.html',
  styleUrls: ['./our-church.page.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatToolbar,
    MatIconButton,
    MatMenuTrigger,
    MatIcon,
    MatMenu,
    MatMenuItem,
    TimelineComponent,
    FooterComponent,
    IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent,IonCardHeader,
    IonCardTitle, IonText, IonSegment, IonSegmentButton, IonLabel
  ]
})
export class OurChurchPage {
  private dataService = inject(AllChurchInformationService);
  private platform = inject(Platform);

  public platformWidth = this.platform.width()
  selectedSegment = signal('history');
  //rxResource signal from http request
  ourChurch = this.dataService.allWebsiteInformationTwo.value;


  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.platformWidth = this.platform.width();
  }

  segmentChanged(event: any) {
    this.selectedSegment.set(event.currentTarget.value);
  }

  //signals which replaced rxjs
  // historyItems = computed(() => this.dataService.allChurchInformation().allWebsiteInformation?.ourChurch?.history);
  // ourChurch = computed(() => this.dataService.allChurchInformation().allWebsiteInformation?.ourChurch);
  // faithStuff = computed(() => this.dataService.allChurchInformation()?.statementOfFaith);
  // historyItems = this.dataService.allWebsiteInformationTwo.value;
  // faithStuff = this.dataService.allWebsiteInformationTwo.value;

}
