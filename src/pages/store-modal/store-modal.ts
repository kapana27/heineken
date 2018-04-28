import { Component } from '@angular/core';
import { AddStoreProvider } from '../../providers/add-store/add-store';

import { IonicPage, NavController, NavParams,ViewController ,AlertController } from 'ionic-angular';

/**
 * Generated class for the StoreModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store-modal',
  templateUrl: 'store-modal.html',
})
export class StoreModalPage {
  public data:any;
  id:number;
  name:string;
  price:number ;
  size:number ;
  avaliable:boolean ;
  equal:boolean ;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl : ViewController,public alertCtrl: AlertController , private store: AddStoreProvider) {

    this.data=this.navParams.data;

  }

  ionViewDidLoad() {

  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
  ChangeNa(data){
      if(data.na){
          data.avaliable=false;
          data.equal=false;
      }
  }
  AddComment(ev){


      let prompt = this.alertCtrl.create({
      title: 'Price change',
      message: "Specify the changed price",
      enableBackdropDismiss: false,
      inputs: [
        {
          name: 'Price',
          placeholder: 'Price'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            if(data.Price==undefined || data.Price==null || data.Price==""){
              this.data.equal=true;
            }
          }
        },
        {
          text: 'Save',
          handler: data => {
              if(data.Price==undefined || data.Price==null || data.Price==""){
                  this.data.equal=true;
              }
              this.data.comment=data.Price;


          }
        }
      ]
    });
    if(!this.data.notequal){
      prompt.present();
    }
  }



}
