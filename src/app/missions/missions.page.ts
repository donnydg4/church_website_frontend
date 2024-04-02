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

  //signals
  missions = computed(() => this.dataService.allChurchInformation()?.missionsPage);
  missionCards = computed(() => this.dataService.allChurchInformation()?.missionsPage?.displayCards.sort(sortByDateDisplay).sort(sortByCardCategory));
}
