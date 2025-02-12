import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {IonButton, IonCol, IonContent, IonIcon, IonRouterOutlet, IonRow} from "@ionic/angular/standalone";
import {AllChurchInformationService} from "../../service/all-church-information.service";

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  standalone: true,
    imports: [HeaderComponent, IonContent, IonRouterOutlet, IonButton, IonCol, IonIcon, IonRow]
})
export class DefaultLayoutComponent implements OnInit {

  ngOnInit() {
  }

}
