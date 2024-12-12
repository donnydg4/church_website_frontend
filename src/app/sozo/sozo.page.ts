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
