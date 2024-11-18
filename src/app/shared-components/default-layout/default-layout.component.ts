import {Component, OnInit} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-default-layout',
    templateUrl: './default-layout.component.html',
    styleUrls: ['./default-layout.component.scss'],
    standalone: true,
    imports: [HeaderComponent, IonicModule],
})
export class DefaultLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
