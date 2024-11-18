import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {IonButton, IonCol, IonContent, IonFooter, IonGrid, IonRow, IonText} from "@ionic/angular/standalone";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [RouterLink, IonContent, IonGrid, IonRow, IonCol, IonButton, IonText, IonFooter]
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
