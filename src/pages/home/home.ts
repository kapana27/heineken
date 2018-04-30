import { Component } from '@angular/core';
import { NavController ,AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { TradePage } from '../trade/trade';
import { ScorePage } from '../score/score';

import { UserProvider } from '../../providers/user/user';
import { StoresProvider } from '../../providers/stores/stores';
import { ShowStorePage } from '../show-store/show-store';
import { AddstorePage } from '../addstore/addstore';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public stores: Array<any>;
  public name:string;

  constructor(public navCtrl: NavController,private storage: Storage,private UserService: UserProvider, private StoresProvider: StoresProvider, private alertCtrl: AlertController) {
      this.storage.get("token").then((val)=>{
        if(val=="undefined" || val =='' || val==null){
              this.navCtrl.setRoot(LoginPage);
          }
      });
      this.GetStores();
  }

  GetStores(){

    this.stores=this.StoresProvider.GetStores();

  }
  show(s){
      this.navCtrl.push(ScorePage,{'score':s.score});
  }

  createStore(){
    this.navCtrl.push(TradePage);
  }

  AddNewStore(){
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
              this.navCtrl.push(AddstorePage,{name:data.name});
          }
        }
      ]
    });
    prompt.present();


  }
  logout(){
      this.storage.remove('token');
      this.navCtrl.setRoot(LoginPage);
  }
}
