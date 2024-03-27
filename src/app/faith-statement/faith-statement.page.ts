import {Component, inject,} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-faith-statement',
  templateUrl: './faith-statement.page.html',
  styleUrls: ['./faith-statement.page.scss'],
})
export class FaithStatementPage {

  private dataService = inject(AllChurchInformationService);

  faithStuff$ = this.dataService.allWebsiteInformation$
    .pipe(
      map(data => data.statementOfFaith)
    );

}
