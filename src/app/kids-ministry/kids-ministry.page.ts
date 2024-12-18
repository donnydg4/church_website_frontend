import {Component} from '@angular/core';
import {IonCol, IonContent, IonGrid, IonRow} from "@ionic/angular/standalone";

@Component({
  selector: 'app-kids-ministry',
  templateUrl: './kids-ministry.page.html',
  styleUrls: ['./kids-ministry.page.scss'],
  standalone: true,
  imports: [IonContent, IonGrid, IonRow, IonCol]
})
export class KidsMinistryPage {

  constructor() { }

}
