import {Component, ElementRef, signal} from '@angular/core';
import {NavController} from "@ionic/angular";
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";
import {WaysToEngageModel} from "../models/sub-models/ways-to-engage.model";
import {SwiperOptions} from "swiper/types";
import {A11y, Mousewheel, Navigation, Pagination} from "swiper";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController, private dataService: AllChurchInformationService) {
  }

  waysToEngage = signal<WaysToEngageModel[]>([]);

  homeInformation$ = this.dataService.allWebsiteInformation$
    .pipe(
      tap(data => {
        this.waysToEngage.set(data.allWebsiteInformation.homePage.waysToEngage);
      }),
      map(data => data.allWebsiteInformation.homePage)
    );

  navigateToPage(type: string) {
    this.navCtrl.navigateForward([type]);
  }

  public config: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    // autoHeight: true,
    spaceBetween: 10,
    navigation: true,
    pagination: {clickable: true},
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5
    },
    breakpoints: {
      700: {
        slidesPerView: 2,
        centeredSlides: true
      },
      1100: {
        slidesPerView: 3,
        centeredSlides: true
      },
    }
  }

}
