import {Component, inject} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {Clipboard} from '@angular/cdk/clipboard';
import {WatchModel} from "../../models/sub-models/watch.model";
import {MatFormField, MatHint, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {FooterComponent} from '../footer/footer.component';
import {DatePipe} from '@angular/common';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonRow,
  IonText,
  MenuController,
  NavController,
  Platform,
  ToastController
} from "@ionic/angular/standalone";

@Component({
    selector: 'app-video',
    templateUrl: './video.page.html',
    styleUrls: ['./video.page.scss'],
    imports: [
        MatFormField,
        MatLabel,
        MatInput,
        FormsModule,
        MatHint,
        FooterComponent,
        DatePipe,
        IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader,
        IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonText, IonIcon
    ]
})
export class VideoPage {

  private clipboard = inject(Clipboard);
  private toastController = inject(ToastController);
  private platform = inject(Platform);
  private sanitizer = inject(DomSanitizer);
  private navCtrl = inject(NavController);
  private menuCtrl = inject(MenuController);

  textArea: string = "";
  defaultUrl: string = "https://www.youtube.com/embed/";
  opened: boolean = false;
  anyCard: WatchModel;
  youtubeUrl: SafeResourceUrl;

  constructor() {
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
