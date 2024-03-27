import {Component, HostListener, inject} from '@angular/core';
import {MenuController, NavController, Platform} from "@ionic/angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

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
