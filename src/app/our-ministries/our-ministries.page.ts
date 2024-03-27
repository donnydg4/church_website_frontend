import {Component, inject, signal} from '@angular/core';
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

  ourMinistries = signal<OurMinistriesModel>({});

 //rxjs to modify
  displayOurMinistryCards$ = toObservable(this.dataService.allChurchInformation)
    .pipe(
      tap(data => this.ourMinistries.set(data.ourMinistriesPage)),
      map(ourMinistryPageInfo => ourMinistryPageInfo.ourMinistriesPage.displayCards.sort(sortByCardCategory))
    );

  //rjxs to signal
  displayOurMinistryCards = toSignal(this.displayOurMinistryCards$);
}



