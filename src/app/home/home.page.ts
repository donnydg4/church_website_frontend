import {Component, CUSTOM_ELEMENTS_SCHEMA, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {SwiperOptions} from "swiper/types";
import {Navigation, Pagination} from "swiper";
import {NgOptimizedImage} from '@angular/common';
import {SwiperDirective} from '../swiper.directive';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonRow,
  IonText,
  NavController
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    NgOptimizedImage,
    SwiperDirective,
    FooterComponent,
    IonContent, IonGrid, IonRow, IonCol, IonButton, IonText, IonIcon
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {

  private dataService = inject(AllChurchInformationService);
  private navCtrl = inject(NavController);

  // homeInfo = computed(() => this.dataService.allChurchInformation()?.allWebsiteInformation?.homePage);
  homeInfo = this.dataService.allWebsiteInformationTwo.value;
  // waysToEngage = computed(() => this.dataService.allChurchInformation().allWebsiteInformation?.homePage?.waysToEngage);
  featuredEvents = this.dataService.featuredEventsTwo;

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
