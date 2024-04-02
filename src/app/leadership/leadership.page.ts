import {Component, computed, inject, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";
import {LeadershipModel} from "../models/sub-models/leadership.model";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.page.html',
  styleUrls: ['./leadership.page.scss'],
})
export class LeadershipPage {

  private dataService = inject(AllChurchInformationService);

  //signals
  leadershipInfo = computed(() => this.dataService.allChurchInformation()!.leadershipPage);
  leadershipCards = computed(() => this.dataService.allChurchInformation().leadershipPage?.displayCards);
}
