import {Component, HostListener} from '@angular/core';
import {MenuController, NavController, Platform} from "@ionic/angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private platform: Platform, private navCtrl: NavController, private menuCtrl: MenuController) {
  }

  public platformWidth = this.platform.width()

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.platformWidth = this.platform.width();
  }

  navigateToPage(type: string) {
    this.navCtrl.navigateForward(type);
    // this.menuCtrl.enable(true);
  }


}
