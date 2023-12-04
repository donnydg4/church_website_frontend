import { Component, OnInit } from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-directions',
  templateUrl: './directions.page.html',
  styleUrls: ['./directions.page.scss'],
})
export class DirectionsPage {

  constructor(private dataService: AllChurchInformationService) { }

  locations$ = this.dataService.allWebsiteInformation$.pipe(
    map(directions => directions.allWebsiteInformation.directions),
    tap(data => console.log(data.length))
  );
}
