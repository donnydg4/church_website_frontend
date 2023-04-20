import { Component, OnInit } from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-ministries-we-support',
  templateUrl: './ministries-we-support.page.html',
  styleUrls: ['./ministries-we-support.page.scss'],
})
export class MinistriesWeSupportPage implements OnInit {

  selectedCategory: string = 'MINISTRIES WE SUPPORT';

  displayMinistriesWeSupportCards$ = this.dataService.allDisplayCards$
    .pipe(
      map(ministriesWeSupportCards => ministriesWeSupportCards.filter(supportedMinistries => supportedMinistries.type === 'SUPPORTED MINISTRY'))
    );

  constructor(private dataService: AllChurchInformationService) { }

  ngOnInit() {
  }

}
