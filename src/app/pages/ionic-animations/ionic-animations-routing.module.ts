import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicAnimationsPage } from './ionic-animations.page';

const routes: Routes = [
  {
    path: '',
    component: IonicAnimationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonicAnimationsPageRoutingModule {}
