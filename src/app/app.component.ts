import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {register, register as registerSwiperElements} from 'swiper/element/bundle';
import {IonApp, IonRouterOutlet} from "@ionic/angular/standalone";


register();
registerSwiperElements();

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    imports: [IonApp, IonRouterOutlet],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  constructor() {
  }
}
