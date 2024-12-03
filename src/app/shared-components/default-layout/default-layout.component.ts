import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {IonContent, IonRouterOutlet} from "@ionic/angular/standalone";

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  standalone: true,
  imports: [HeaderComponent, IonContent, IonRouterOutlet]
})
export class DefaultLayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
