import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirestoragePage } from './firestorage';

@NgModule({
  declarations: [
    FirestoragePage,
  ],
  imports: [
    IonicPageModule.forChild(FirestoragePage),
  ],
})
export class FirestoragePageModule {}
