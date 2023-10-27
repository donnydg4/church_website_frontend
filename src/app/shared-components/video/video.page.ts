import {Component} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {Platform, ToastController} from "@ionic/angular";
import {Clipboard} from '@angular/cdk/clipboard';
import {alert} from "ionicons/icons";
import {ExtrasService} from "../../service/extras.service";
import {WatchModel} from "../../models/sub-models/watch.model";

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage {

  text: string = "";
  defaultUrl: string = "https://www.youtube.com/embed/";
  opened: boolean = false;
  anyCard: WatchModel;

  youtubeUrl: SafeResourceUrl;

  constructor(public clipboard: Clipboard, public toastController: ToastController, public platform: Platform,
    private navExtrasService: ExtrasService, public sanitizer: DomSanitizer) {
    this.anyCard = navExtrasService.getExtras();
    console.log(this.anyCard);
    // this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.defaultUrl + this.anyCard.videoId);
  }

  openTextArea() {
    this.opened = !this.opened;
  }

  copyText() {
    // this.clipboard.copy(this.text).then(() => {
    //   if (this.platform.is('cordova')) {
    //     this.presentToast();
    //   } else {
    //     alert('Your Notes have been copied to your clipboard!');
    //   }
    // });
    // console.log(this.text);
    this.clipboard.copy(this.text);
    this.presentToast();
  }

  copyUrlToClipboard(id: string) {
    const shareUrl: string = 'https://www.youtube.com/watch?v=' + id;
    // this.clipboard.copy(shareUrl).then(() => {
    //   if (this.platform.is('cordova')) {
    //     this.presentToastForShare();
    //   } else {
    //     alert('The Youtube URL has been copied to your clipboard!');
    //   }
    // });
    this.clipboard.copy(shareUrl);
    this.presentToastForShare();
    console.log(shareUrl);
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

}
