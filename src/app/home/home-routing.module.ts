import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';
import {MainLayoutComponent} from "../shared-components/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: 'home',
    component: MainLayoutComponent,
    children: [
      {path: '', component: HomePage}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
