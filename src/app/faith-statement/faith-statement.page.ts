import { Component,  } from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-faith-statement',
  templateUrl: './faith-statement.page.html',
  styleUrls: ['./faith-statement.page.scss'],
})
export class FaithStatementPage {

  constructor(private dataService: AllChurchInformationService) {
  }

  faithStuff$ = this.dataService.allWebsiteInformation$
    .pipe(
      map(data => data.statementOfFaith),
      tap(data => console.log(data))
    );

}
