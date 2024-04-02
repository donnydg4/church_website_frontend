import {Component, computed, inject, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";
import {MinistriesWeSupportModel} from "../models/sub-models/ministries-we-support.model";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-ministries-we-support',
  templateUrl: './ministries-we-support.page.html',
  styleUrls: ['./ministries-we-support.page.scss'],
})
export class MinistriesWeSupportPage {

  private dataService = inject(AllChurchInformationService);


  //rxjs to modify
  // displayMinistriesWeSupportCards$ = toObservable(this.dataService.allChurchInformation)
  //   .pipe(
  //     tap(data => this.ministriesWeSupportInfo.set(data.ministriesWeSupportPage)),
  //     map(ministriesWeSupportInfo => ministriesWeSupportInfo.ministriesWeSupportPage.displayCards)
  //   );

  ministriesWeSupportInfo = computed(() => this.dataService.allChurchInformation().ministriesWeSupportPage);

  //rxjs to signal
  displayMinistriesWeSupportCards = computed(() => this.dataService.allChurchInformation().ministriesWeSupportPage?.displayCards);
}
