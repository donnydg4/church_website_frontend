import {Component, computed, inject, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";
import {sortByCardCategory} from "../utils/utils";
import {OurMinistriesModel} from "../models/sub-models/our-ministries.model";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-our-ministries',
  templateUrl: './our-ministries.page.html',
  styleUrls: ['./our-ministries.page.scss'],
})
export class OurMinistriesPage {

  private dataService = inject(AllChurchInformationService);


 // //rxjs to modify
 //  displayOurMinistryCards$ = toObservable(this.dataService.allChurchInformation)
 //    .pipe(
 //      tap(data => this.ourMinistries.set(data.ourMinistriesPage)),
 //      map(ourMinistryPageInfo => ourMinistryPageInfo.ourMinistriesPage.displayCards.sort(sortByCardCategory))
 //    );


  ourMinistries = computed(() => this.dataService?.allChurchInformation()!.ourMinistriesPage!);
  //rjxs to signal
  displayOurMinistryCards = computed(() => this.dataService.allChurchInformation()?.ourMinistriesPage?.displayCards.sort(sortByCardCategory));
}



