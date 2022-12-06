import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./shared-components/main-layout/main-layout.component";
import {CalendarPage} from "./calendar/calendar.page";
import {SermonsPage} from "./sermons/sermons.page";
import {DevotionalsPage} from "./devotionals/devotionals.page";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'calendar',
    component: MainLayoutComponent,
    children: [
      { path: '', component: CalendarPage},
    ]
  },
  {
    path: 'sermons',
    component: MainLayoutComponent,
    children: [
      { path: '', component: SermonsPage}
    ]
  },
  {
    path: 'devotionals',
    component: MainLayoutComponent,
    children: [
      { path: '', component: DevotionalsPage}
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
