import { Component, OnInit } from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.page.html',
  styleUrls: ['./all-events.page.scss'],
})
export class AllEventsPage implements OnInit {

  constructor(private dataService: AllChurchInformationService) { }

  ngOnInit() {
  }

  getAllEvents$ = this.dataService.allEvents$;


}
