import {Component, Input, OnInit} from '@angular/core';
import {WatchModel} from "../../models/sub-models/watch.model";
import {AllChurchInformationService} from "../../service/all-church-information.service";
import {Observable} from "rxjs";
import {SeriesCardModel} from "../../models/sub-models/series-card.model";
import {PaginationInstance} from "ngx-pagination";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import { Router } from '@angular/router';
import {convertSpaceToDash} from "../../utils/utils";
import {ExtrasService} from "../../service/extras.service";


@Component({
  selector: 'app-all-watch',
  templateUrl: './all-watch.component.html',
  styleUrls: ['./all-watch.component.scss'],
})
export class AllWatchComponent {

  page: number = 1;

  @Input() title = '';
  @Input() objectArray: Observable<WatchModel[]>
  @Input() seriesArray: Observable<SeriesCardModel[]>

  public config: PaginationInstance = {
    itemsPerPage: 15,
    currentPage: this.page
  }

  handleChange(event) {
    this.dataService.searchQueryWord(event.target.value.toLowerCase());
    console.log(event.target.value.toLowerCase());
  }

  constructor(private dataService: AllChurchInformationService, public router: Router, private extrasService: ExtrasService) {
  }

  pageEvent(page: number) {
    this.page = page;
    this.config.currentPage = page;
    window.scrollTo(0, 0);
  }

  navigateToPage(card: WatchModel){
    if (card.type.toLowerCase() === 'sermon') {
      this.extrasService.setExtras(card);
      this.router.navigate(['/sermons', convertSpaceToDash(card.title)]);
    }
    if (card.type.toLowerCase() === 'devotional') {
      this.extrasService.setExtras(card);
      this.router.navigate(['/devotionals', convertSpaceToDash(card.title)]);
    }
  }

}
