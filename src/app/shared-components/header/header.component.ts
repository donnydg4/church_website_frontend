import {Component, HostListener, inject, ViewEncapsulation} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {RouterLink} from '@angular/router';
import {
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemGroup,
  IonLabel,
  IonMenu,
  IonMenuButton,
  IonRow,
  IonToolbar,
  MenuController,
  NavController,
  Platform
} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {chevronDownOutline} from "ionicons/icons";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    MatToolbar,
    // NgOptimizedImage,
    RouterLink,
    IonContent, IonGrid, IonRow, IonCol, IonButton, IonButtons, IonIcon, IonMenuButton, IonMenu, IonHeader, IonToolbar, IonLabel, IonItem,
    IonAccordion, IonAccordionGroup, IonItemGroup, MatTooltip
  ],
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

  constructor() {
    addIcons({ chevronDownOutline });
  }

  private platform = inject(Platform);
  private navCtrl = inject(NavController);
  private menuCtrl = inject(MenuController);

  public platformWidth = this.platform.width()

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.platformWidth = this.platform.width();
  }

  navigateToPage(type: string) {
    this.menuCtrl.toggle();
    this.navCtrl.navigateForward(type);
  }


}
