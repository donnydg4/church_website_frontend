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
import {Component, OnInit} from '@angular/core';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {IonCol, IonContent, IonGrid, IonRow} from "@ionic/angular/standalone";

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
    IonRow]
})
export class SozoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
