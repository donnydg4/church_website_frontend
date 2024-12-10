import {Component, computed, inject} from '@angular/core';
import {AllChurchInformationService} from "../service/all-church-information.service";

import {NgOptimizedImage} from '@angular/common';
import {EventComponent} from './event/event.component';
import {FooterComponent} from '../shared-components/footer/footer.component';
import {IonCol, IonContent, IonGrid, IonRow} from "@ionic/angular/standalone";

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.page.html',
  styleUrls: ['./all-events.page.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage,
    EventComponent,
    FooterComponent,
    IonContent, IonGrid, IonRow, IonCol
  ]
})
export class AllEventsPage {

  private dataService = inject(AllChurchInformationService);

  //TODO: Figure out how to mess with specific dates... Filter on the model date most likely
  getAllEvents = this.dataService.featuredEventsTwo;
  eventsInfo = this.dataService.allWebsiteInformationTwo.value;

  // eventsInfo = computed(() => this.dataService.allChurchInformation()?.mainEvents);

}
