import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from '../shared-components/footer/footer.component';

@Component({
    selector: 'app-sozo',
    templateUrl: './sozo.page.html',
    styleUrls: ['./sozo.page.scss'],
    standalone: true,
    imports: [IonicModule, FooterComponent],
})
export class SozoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
