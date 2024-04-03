import {Component, computed, HostListener, inject, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-our-church',
  templateUrl: './our-church.page.html',
  styleUrls: ['./our-church.page.scss'],
})
export class OurChurchPage {

  clicked = signal<boolean>(false);

  private dataService = inject(AllChurchInformationService);
  private platform = inject(Platform);
  public platformWidth = this.platform.width()
  selectedSegment: string = 'history';

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.platformWidth = this.platform.width();
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.currentTarget.value;
    console.log(this.selectedSegment);
  }

  //signals which replaced rxjs
  historyItems = computed(() => this.dataService.allChurchInformation().allWebsiteInformation?.ourChurch?.history);
  ourChurch = computed(() => this.dataService.allChurchInformation().allWebsiteInformation?.ourChurch);
  faithStuff = computed(() => this.dataService.allChurchInformation()?.statementOfFaith);

}
