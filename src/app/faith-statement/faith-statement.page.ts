import {Component, inject, signal,} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map} from "rxjs/operators";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-faith-statement',
  templateUrl: './faith-statement.page.html',
  styleUrls: ['./faith-statement.page.scss'],
})
export class FaithStatementPage {

  private dataService = inject(AllChurchInformationService);

  //rxjs modify
  faithStuff$ = toObservable(this.dataService.allChurchInformation)
    .pipe(
      map(data => data.statementOfFaith)
    );

  //convert rxjs to signal
  faithStuff = toSignal(this.faithStuff$);

}
