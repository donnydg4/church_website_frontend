import {Component, OnInit} from '@angular/core';
import {WatchModel} from "../models/watch.model";
import {AllChurchInformationService} from "../service/all-church-information.service";

@Component({
  selector: 'app-devotionals',
  templateUrl: './devotionals.page.html',
  styleUrls: ['./devotionals.page.scss'],
})
export class DevotionalsPage implements OnInit {

  devotionals: WatchModel[] = this.watchArray.getWatchModels();

  devotionalsTitle = 'Devotionals';

  constructor(private watchArray: AllChurchInformationService) { }

  ngOnInit() {
  }

}
