import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';
import {DefaultLayoutComponent} from "../shared-components/default-layout/default-layout.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [{
      path: '',
      component: DefaultLayoutComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {
}
