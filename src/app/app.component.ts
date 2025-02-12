import {Component, CUSTOM_ELEMENTS_SCHEMA, inject} from '@angular/core';
import {register, register as registerSwiperElements} from 'swiper/element/bundle';
import {IonApp, IonRouterOutlet} from "@ionic/angular/standalone";
import {AllChurchInformationService} from "./service/all-church-information.service";


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
