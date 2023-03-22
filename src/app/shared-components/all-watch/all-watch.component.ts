import {Component, Input, OnInit} from '@angular/core';
import {WatchModel} from "../../models/watch.model";
import {AllChurchInformationService} from "../../service/all-church-information.service";
import {Observable} from "rxjs";
import {SeriesCardModel} from "../../models/series-card.model";
import {PaginationInstance} from "ngx-pagination";

@Component({
  selector: 'app-all-watch',
  templateUrl: './all-watch.component.html',
  styleUrls: ['./all-watch.component.scss'],
})
export class AllWatchComponent implements OnInit {

  page: number = 1;

  public config: PaginationInstance = {
    itemsPerPage: 15,
    currentPage: this.page
  }

  @Input() title = '';
  @Input() objectArray: Observable<WatchModel[]>
  @Input() seriesArray: Observable<SeriesCardModel[]>

  handleChange(event) {
    this.dataService.searchQueryWord(event.target.value.toLowerCase());
    console.log(event.target.value.toLowerCase());
  }

  constructor(private dataService: AllChurchInformationService) {
  }


  ngOnInit() {
  }

  pageEvent(page: number) {
    this.page = page;
    this.config.currentPage = page;
    window.scrollTo(0, 0);
  }

}
