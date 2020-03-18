import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonicAnimationsPageRoutingModule } from './ionic-animations-routing.module';

import { IonicAnimationsPage } from './ionic-animations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicAnimationsPageRoutingModule
  ],
  declarations: [IonicAnimationsPage]
})
export class IonicAnimationsPageModule {}
