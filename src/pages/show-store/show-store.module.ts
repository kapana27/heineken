import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowStorePage } from './show-store';

@NgModule({
  declarations: [
    ShowStorePage,
  ],
  imports: [
    IonicPageModule.forChild(ShowStorePage),
  ],
})
export class ShowStorePageModule {}
