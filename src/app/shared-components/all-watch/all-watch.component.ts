import {Component, Input, OnInit} from '@angular/core';
import {WatchModel} from "../../models/watch.model";
import {AllChurchInformationService} from "../../service/all-church-information.service";

@Component({
  selector: 'app-all-watch',
  templateUrl: './all-watch.component.html',
  styleUrls: ['./all-watch.component.scss'],
})
export class AllWatchComponent implements OnInit {

  page: number;
  selectionBoolean: boolean = true;
  selection: string = 'Newest';

  @Input() title = '';
  @Input() objectArray: WatchModel[]

  //get how many in watchModel
  // total: number = this.dataService.getWatchModels().length;

  constructor(private dataService: AllChurchInformationService) { }

  ngOnInit() {}

  sort(): void {
    this.selectionBoolean = !this.selectionBoolean;
    console.log(this.selectionBoolean);

    if (this.selectionBoolean) {
      this.selection = 'Newest';
    }

    if (!this.selectionBoolean) {
      this.selection = 'Oldest'
    }
  }

}
