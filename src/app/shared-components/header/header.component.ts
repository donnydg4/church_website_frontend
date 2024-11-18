import {Component, HostListener, inject} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
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
  IonText,
  IonToolbar,
  MenuController,
  NavController,
  Platform
} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {chevronDownOutline} from "ionicons/icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    MatToolbar,
    NgOptimizedImage,
    RouterLink,
    IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader,
    IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonText,
    IonButtons, IonIcon, IonMenuButton, IonMenu, IonHeader, IonToolbar, IonLabel, IonItem,
    IonAccordion, IonAccordionGroup, IonItemGroup
  ],
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
