import { Component } from '@angular/core';

import { AddstorePage } from '../addstore/addstore';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the ChannelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel',
  templateUrl: 'channel.html',
})
export class ChannelPage {
  storeType:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
    this.storeType=navParams.data.type;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelPage');
  }

  CreateStore(i){
      let prompt = this.alertCtrl.create({
        title: 'Name',
        message: "Enter a name ",
        inputs: [
          {
            name: 'name',
            placeholder: 'name'
          },
        ],
        enableBackdropDismiss: false,
        buttons: [

          {
            text: 'Save',
            handler: data => {
                if(data.name==''){
                    return false;
                }

                this.navCtrl.push(AddstorePage,{name:data.name,type:this.storeType ,channel:i});
            }
          }
        ]
      });
      prompt.present();
  }

}
