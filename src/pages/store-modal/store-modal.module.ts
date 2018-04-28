import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreModalPage } from './store-modal';

@NgModule({
  declarations: [
    StoreModalPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreModalPage),
  ],
})
export class StoreModalPageModule {}
