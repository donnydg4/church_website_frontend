import {Component, Input, OnInit} from '@angular/core';
import {WatchModel} from "../../models/watch.model";
import {AllChurchInformationService} from "../../service/all-church-information.service";
import {Observable} from "rxjs";
import {SeriesCardModel} from "../../models/series-card.model";

@Component({
  selector: 'app-all-watch',
  templateUrl: './all-watch.component.html',
  styleUrls: ['./all-watch.component.scss'],
})
export class AllWatchComponent implements OnInit {

  page: number;

  @Input() title = '';
  @Input() objectArray: Observable<WatchModel[]>
  @Input() seriesArray: Observable<SeriesCardModel[]>

  constructor(private dataService: AllChurchInformationService) { }

  ngOnInit() {
  }

}
