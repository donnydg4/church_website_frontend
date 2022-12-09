import {Component, OnInit} from '@angular/core';
import {WatchModel} from "../models/watch.model";
import {AllChurchInformationService} from "../service/all-church-information.service";

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.page.html',
  styleUrls: ['./sermons.page.scss'],
})
export class SermonsPage implements OnInit {

  sermons: WatchModel[] = this.watchArray.getWatchModels();

  sermonTitle = 'Sermons';

  constructor(private watchArray: AllChurchInformationService) { }

  ngOnInit() {
  }

}
