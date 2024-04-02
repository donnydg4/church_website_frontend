import {Component, computed, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map} from "rxjs/operators";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-directions',
  templateUrl: './directions.page.html',
  styleUrls: ['./directions.page.scss'],
})
export class DirectionsPage {

  private dataService = inject(AllChurchInformationService);

  //convert rxjs to signal
  locations = computed(() => this.dataService.allChurchInformation().allWebsiteInformation?.directions);
}
