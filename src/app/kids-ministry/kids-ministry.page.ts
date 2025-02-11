import {Component, HostListener, inject} from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonText,
  Platform
} from "@ionic/angular/standalone";
import {NgOptimizedImage} from "@angular/common";
import {AllChurchInformationService} from "../service/all-church-information.service";
import {FooterComponent} from "../shared-components/footer/footer.component";
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-kids-ministry',
  templateUrl: './kids-ministry.page.html',
  styleUrls: ['./kids-ministry.page.scss'],
  standalone: true,
  imports: []
})
export class KidsMinistryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
