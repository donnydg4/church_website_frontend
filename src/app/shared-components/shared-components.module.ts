import {CommonModule, NgOptimizedImage} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AllWatchComponent} from "./all-watch/all-watch.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {NgxPaginationModule} from "ngx-pagination";
import {DisplayCardsComponent} from "./display-cards/display-cards.component";
import {DefaultLayoutComponent} from "./default-layout/default-layout.component";
import {TimelineComponent} from "./timeline/timeline.component";


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([]),
        IonicModule,
        MatToolbarModule,
        MatPaginatorModule,
        NgxPaginationModule,
        NgOptimizedImage,
        FooterComponent,
        HeaderComponent,
        AllWatchComponent,
        DisplayCardsComponent,
        DefaultLayoutComponent,
        TimelineComponent,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        AllWatchComponent,
        DisplayCardsComponent,
        DefaultLayoutComponent,
        TimelineComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedComponentsModule {
}
