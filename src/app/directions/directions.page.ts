import {Component, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-directions',
  templateUrl: './directions.page.html',
  styleUrls: ['./directions.page.scss'],
})
export class DirectionsPage {

  private dataService = inject(AllChurchInformationService);

  locations$ = this.dataService.allWebsiteInformation$.pipe(
    map(directions => directions.allWebsiteInformation.directions)
  );
}
