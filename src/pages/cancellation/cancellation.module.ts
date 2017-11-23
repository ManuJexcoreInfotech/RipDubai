import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancellationPage } from './cancellation';

@NgModule({
  declarations: [
    CancellationPage,
  ],
  imports: [
    IonicPageModule.forChild(CancellationPage),
  ],
})
export class CancellationPageModule {}
