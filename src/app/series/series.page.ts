import {Component, OnInit} from '@angular/core';
import {WatchModel} from "../models/watch.model";
import {AllChurchInformationService} from "../service/all-church-information.service";

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  series: WatchModel[] = this.watchArray.getWatchModels();
  seriesTitle = 'Series';

  constructor(private watchArray: AllChurchInformationService) { }

  ngOnInit() {
  }

}
