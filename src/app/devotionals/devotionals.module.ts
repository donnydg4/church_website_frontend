import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {DevotionalsPageRoutingModule} from './devotionals-routing.module';
import {DevotionalsPage} from './devotionals.page';
import {SharedComponentsModule} from "../shared-components/shared-components.module";

@NgModule({
  imports: [
    IonicModule,
    DevotionalsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [DevotionalsPage]
})
export class DevotionalsPageModule {
}
