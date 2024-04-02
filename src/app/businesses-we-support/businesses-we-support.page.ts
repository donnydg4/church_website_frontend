import {Component, computed, inject, signal} from '@angular/core';
import {BusinessesWeSupportModel} from "../models/sub-models/businesses-we-support.model";
import {map, tap} from "rxjs/operators";
import {sortByCardCategory} from "../utils/utils";
import {AllChurchInformationService} from "../service/all-church-information.service";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-businesses-we-support',
  templateUrl: './businesses-we-support.page.html',
  styleUrls: ['./businesses-we-support.page.scss'],
})
export class BusinessesWeSupportPage {

  private dataService = inject(AllChurchInformationService);

  //convert back to signal to use in template!
  displayBusinessCards = computed(() => this.dataService.allChurchInformation().businessesWeSupportPage?.displayCards.sort(sortByCardCategory));
  businessesWeSupport = computed(() => this.dataService.allChurchInformation()?.businessesWeSupportPage);

}
