import {Component, computed, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import { IonicModule } from '@ionic/angular';
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from '../shared-components/footer/footer.component';

@Component({
    selector: 'app-directions',
    templateUrl: './directions.page.html',
    styleUrls: ['./directions.page.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgOptimizedImage,
        FooterComponent,
    ],
})
export class DirectionsPage {

  private dataService = inject(AllChurchInformationService);

  //convert rxjs to signal
  locations = computed(() => this.dataService.allChurchInformation().allWebsiteInformation?.directions);
}
