import {Component, HostListener, inject} from '@angular/core';
import {FooterComponent} from '../shared-components/footer/footer.component';
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
  IonItem,
  IonLabel,
  IonRow,
  IonSpinner,
  IonText,
  Platform
} from "@ionic/angular/standalone";
import {DatePipe, NgClass, NgOptimizedImage, SlicePipe} from "@angular/common";
import {AllChurchInformationService} from "../service/all-church-information.service";

@Component({
  selector: 'app-sozo',
  templateUrl: './sozo.page.html',
  styleUrls: ['./sozo.page.scss'],
  standalone: true,
  imports: [
    FooterComponent,
    IonCol,
    IonContent,
    IonGrid,
    IonRow,
    IonSpinner,
    NgOptimizedImage,
    IonText,
    DatePipe,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    NgClass,
    SlicePipe,
    IonButton,
    IonItem,
    IonLabel
  ]
})
export class SozoPage {

  private platform = inject(Platform);
  private dataService = inject(AllChurchInformationService);

  public platformWidth = this.platform.width()

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.platformWidth = this.platform.width();
  }

  sozo = this.dataService.allWebsiteInformationTwo.value;

  constructor() { }

}
