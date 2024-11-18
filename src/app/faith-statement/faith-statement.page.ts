import {Component, computed, inject,} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";
import { IonicModule } from '@ionic/angular';
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from '../shared-components/footer/footer.component';

@Component({
    selector: 'app-faith-statement',
    templateUrl: './faith-statement.page.html',
    styleUrls: ['./faith-statement.page.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgOptimizedImage,
        FooterComponent,
    ],
})
export class FaithStatementPage {

  private dataService = inject(AllChurchInformationService);

  //convert rxjs to signal
  faithStuff = computed(() => this.dataService.allChurchInformation()?.statementOfFaith);

}
