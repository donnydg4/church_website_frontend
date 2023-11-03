import {Component, OnInit, signal} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";
import {LeadershipModel} from "../models/sub-models/leadership.model";
import {MinistriesWeSupportModel} from "../models/sub-models/ministries-we-support.model";

@Component({
  selector: 'app-ministries-we-support',
  templateUrl: './ministries-we-support.page.html',
  styleUrls: ['./ministries-we-support.page.scss'],
})
export class MinistriesWeSupportPage implements OnInit {

  selectedCategory: string = 'MINISTRIES WE SUPPORT';
  ministriesWeSupportInfo = signal<MinistriesWeSupportModel>({});


  displayMinistriesWeSupportCards$ = this.dataService.allWebsiteInformation$
    .pipe(
      tap(data => this.ministriesWeSupportInfo.set(data.ministriesWeSupportPage)),
      map(ministriesWeSupportInfo => ministriesWeSupportInfo.ministriesWeSupportPage.displayCards.filter(supportedMinistries => supportedMinistries.type === 'SUPPORTED MINISTRY')
      )
    );



  constructor(private dataService: AllChurchInformationService) {
  }

  ngOnInit() {
  }

}
