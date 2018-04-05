import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowStorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-store',
  templateUrl: 'show-store.html',
})
export class ShowStorePage {
  public data:{};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.data=this.navParams.data;
  }

  ionViewDidLoad() {
    
  }

}
