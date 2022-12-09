import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-all-watch',
  templateUrl: './all-watch.component.html',
  styleUrls: ['./all-watch.component.scss'],
})
export class AllWatchComponent implements OnInit {

  @Input() title = '';
  @Input() objectArray

  constructor() { }

  ngOnInit() {}

}
