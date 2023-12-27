import {Component, ElementRef, signal, ViewChild} from '@angular/core';
import {NavController} from "@ionic/angular";
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";
import {WaysToEngageModel} from "../models/sub-models/ways-to-engage.model";
import {SwiperOptions} from "swiper/types";
import { Navigation, Pagination} from "swiper";


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
    modules: [Navigation, Pagination],
    spaceBetween: 10,
    pagination: {clickable: true},
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    effect: "coverflow",
    autoplay: {
      delay: 2000,
      reverseDirection: true,
      disableOnInteraction: true
    },
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
      2050: {
        slidesPerView: 3,
        centeredSlides: true,
        setWrapperSize: true
      }
    }
  }
}
