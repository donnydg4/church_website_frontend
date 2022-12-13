import {Component, Input, OnInit} from '@angular/core';
import {WatchModel} from "../../models/watch.model";

@Component({
  selector: 'app-all-watch',
  templateUrl: './all-watch.component.html',
  styleUrls: ['./all-watch.component.scss'],
})
export class AllWatchComponent implements OnInit {

  selectionBoolean: boolean = true;
  selection: string = 'Newest';
  @Input() title = '';
  @Input() objectArray: WatchModel[];

  constructor() { }

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
