import {Component, computed, effect, inject, signal} from '@angular/core';
import {NavController} from "@ionic/angular";
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";
import {WaysToEngageModel} from "../models/sub-models/ways-to-engage.model";
import {SwiperOptions} from "swiper/types";
import {Navigation, Pagination} from "swiper";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private dataService = inject(AllChurchInformationService);
  private navCtrl = inject(NavController);


  // waysToEngage = signal<WaysToEngageModel[]>([]);
  // TODO: understand why this fails when converted to a signal?
  // homeInformation$ = toObservable(this.dataService.allChurchInformation)
  //   .pipe(
  //   tap(data => {
  //     this.waysToEngage.set(data.allWebsiteInformation.homePage.waysToEngage);
  //   }),
  //   map(data => data.allWebsiteInformation.homePage)
  // );

  homeInfo = computed(() => this.dataService.allChurchInformation().allWebsiteInformation?.homePage);
  waysToEngage = computed(() => this.dataService.allChurchInformation().allWebsiteInformation?.homePage?.waysToEngage);


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
