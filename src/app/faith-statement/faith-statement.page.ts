import {Component, computed, inject,} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";

@Component({
  selector: 'app-faith-statement',
  templateUrl: './faith-statement.page.html',
  styleUrls: ['./faith-statement.page.scss'],
})
export class FaithStatementPage {

  private dataService = inject(AllChurchInformationService);

  //convert rxjs to signal
  faithStuff = computed(() => this.dataService.allChurchInformation()?.statementOfFaith);

}
