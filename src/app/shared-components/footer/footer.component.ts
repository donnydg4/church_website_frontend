import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {IonButton, IonCol, IonContent, IonFooter, IonGrid, IonRow, IonText} from "@ionic/angular/standalone";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [RouterLink, IonGrid, IonRow, IonCol, IonButton, IonText, IonFooter, MatTooltip]
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
