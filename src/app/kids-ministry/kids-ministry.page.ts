import {Component, HostListener, inject} from '@angular/core';
import {IonCol, IonContent, IonGrid, IonRow, Platform} from "@ionic/angular/standalone";
import {NgOptimizedImage} from "@angular/common";
import {AllChurchInformationService} from "../service/all-church-information.service";

@Component({
  selector: 'app-kids-ministry',
  templateUrl: './kids-ministry.page.html',
  styleUrls: ['./kids-ministry.page.scss'],
  standalone: true,
    imports: [IonContent, IonGrid, IonRow, IonCol, NgOptimizedImage]
})
export class KidsMinistryPage {
  private platform = inject(Platform);
  private dataService = inject(AllChurchInformationService);

  public platformWidth = this.platform.width()

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.platformWidth = this.platform.width();
  }

  kidYouth = this.dataService.allWebsiteInformationTwo.value;
}
