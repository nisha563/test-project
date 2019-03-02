import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PdfgenPage } from './pdfgen';

@NgModule({
  declarations: [
    PdfgenPage,
  ],
  imports: [
    IonicPageModule.forChild(PdfgenPage),
  ],
})
export class PdfgenPageModule {}
