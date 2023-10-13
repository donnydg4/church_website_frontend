import {Component, OnInit} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map} from "rxjs/operators";
import {sortByCardCategory} from "../utils/utils";

@Component({
  selector: 'app-our-ministries',
  templateUrl: './our-ministries.page.html',
  styleUrls: ['./our-ministries.page.scss'],
})
export class OurMinistriesPage implements OnInit {

  selectedCategory: string = 'OUR MINISTRIES';

  constructor(private dataService: AllChurchInformationService) { }

  ngOnInit() {
  }

  displayOurMinistryCards$ = this.dataService.allDisplayCards$
    .pipe(
      map(ourMinistriesCards => ourMinistriesCards.filter(ourMinistries => ourMinistries.type === 'OUR MINISTRY')
        .sort(sortByCardCategory))
    );

}
