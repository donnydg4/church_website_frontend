import {Component} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {MenuController, NavController, Platform, ToastController} from "@ionic/angular";
import {Clipboard} from '@angular/cdk/clipboard';
import {WatchModel} from "../../models/sub-models/watch.model";

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage {

  textArea: string = "";
  defaultUrl: string = "https://www.youtube.com/embed/";
  opened: boolean = false;
  anyCard: WatchModel;
  youtubeUrl: SafeResourceUrl;

  constructor(public clipboard: Clipboard, public toastController: ToastController,
              public platform: Platform, public sanitizer: DomSanitizer, private navCtrl: NavController,
              private menuCtrl: MenuController) {
    this.anyCard = JSON.parse(localStorage.getItem('card'));
    this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.defaultUrl + this.anyCard.videoId);
  }

  openTextArea() {
    this.opened = !this.opened;
  }

  copyText() {
    this.clipboard.copy(this.textArea);
    this.presentToast();
  }

  copyUrlToClipboard(id: string) {
    const shareUrl: string = 'https://www.youtube.com/watch?v=' + id;
    this.clipboard.copy(shareUrl);
    this.presentToastForShare();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      cssClass: 'custom-toast-class',
      message: 'Your Notes have been copied to your clipboard!',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }

  async presentToastForShare() {
    const toast = await this.toastController.create({
      cssClass: 'custom-toast-class',
      message: 'The Youtube URL has been copied to your clipboard!',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }

  back() {
    this.navCtrl.back();
    this.menuCtrl.enable(true, 'menu-one');
  }
}
