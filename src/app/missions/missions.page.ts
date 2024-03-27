import {Component, inject, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";
import {sortByCardCategory, sortByDateDisplay} from "../utils/utils";
import {MissionsModel} from "../models/sub-models/missions.model";

@Component({
  selector: 'app-missions',
  templateUrl: './missions.page.html',
  styleUrls: ['./missions.page.scss'],
})
export class MissionsPage {

  private dataService = inject(AllChurchInformationService);

  missions = signal<MissionsModel>({});

  missionCards$ = this.dataService.allWebsiteInformation$
    .pipe(
      tap(data => this.missions.set(data.missionsPage)),
      map(missionsInfo => missionsInfo.missionsPage.displayCards.sort(sortByDateDisplay).sort(sortByCardCategory))
    );
}
