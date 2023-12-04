import {Component, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";
import {LeadershipModel} from "../models/sub-models/leadership.model";

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.page.html',
  styleUrls: ['./leadership.page.scss'],
})
export class LeadershipPage {

  constructor(private dataService: AllChurchInformationService) { }

  leadershipInfo = signal<LeadershipModel>({});

  leadershipCards$ = this.dataService.allWebsiteInformation$
    .pipe(
      tap(data => this.leadershipInfo.set(data.leadershipPage)),
      map(leadershipPageInfo => leadershipPageInfo.leadershipPage.displayCards));
}
