import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';

/**
 * Generated class for the ScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {
  score:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.score=this.navParams.data.score;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
  }

  go(){
      this.navCtrl.setRoot(HomePage);
  }
}
