import {Component, computed, inject, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";
import {sortByCardCategory, sortByDateDisplay} from "../utils/utils";
import {MissionsModel} from "../models/sub-models/missions.model";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-missions',
  templateUrl: './missions.page.html',
  styleUrls: ['./missions.page.scss'],
})
export class MissionsPage {

  private dataService = inject(AllChurchInformationService);


  // //rxjs to modify
  // missionCards$ = toObservable(this.dataService.allChurchInformation)
  //   .pipe(
  //     tap(data => this.missions.set(data.missionsPage)),
  //     map(missionsInfo => missionsInfo.missionsPage.displayCards.sort(sortByDateDisplay).sort(sortByCardCategory))
  //   );

  missions = computed(() => this.dataService.allChurchInformation()?.missionsPage);

  //rxjs to signal
  missionCards = computed(() => this.dataService.allChurchInformation()?.missionsPage?.displayCards.sort(sortByDateDisplay).sort(sortByCardCategory));
}
