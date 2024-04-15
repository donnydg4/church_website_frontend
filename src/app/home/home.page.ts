import {Component, computed, inject} from '@angular/core';
import {NavController} from "@ionic/angular";
import {AllChurchInformationService} from "../service/all-church-information.service";
import {SwiperOptions} from "swiper/types";
import {Navigation, Pagination} from "swiper";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private dataService = inject(AllChurchInformationService);
  private navCtrl = inject(NavController);

  homeInfo = computed(() => this.dataService.allChurchInformation().allWebsiteInformation?.homePage);
  waysToEngage = computed(() => this.dataService.allChurchInformation().allWebsiteInformation?.homePage?.waysToEngage);
  featuredEvents = computed(() => this.dataService.allChurchInformation().mainEvents?.events?.filter(event => event.featured === true));

  navigateToPage(type: string) {
    this.navCtrl.navigateForward([type]);
  }

  navigateToEvents() {
    this.navCtrl.navigateForward(['/events'])
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
