import {Component} from '@angular/core';
import {register} from 'swiper/element/bundle';
import { IonicModule } from '@ionic/angular';

register();

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: true,
    imports: [IonicModule],
})
export class AppComponent {
  constructor() {
  }
}
