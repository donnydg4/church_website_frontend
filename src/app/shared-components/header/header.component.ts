import {Component, HostListener, OnInit} from '@angular/core';
import {MenuController, NavController, Platform} from "@ionic/angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private platform: Platform, private navCtrl: NavController, private menuCtrl: MenuController) {
    // this.onResize();
  }

  public platformWidth = this.platform.width()

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.platformWidth = this.platform.width();
    console.log(this.platformWidth);
    console.log('why');
  }

  navigateToPage(type: string) {
    this.navCtrl.navigateForward(type);
    this.menuCtrl.toggle();
  }

}
