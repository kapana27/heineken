import { Component } from '@angular/core';
import { NavController ,AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';

import { UserProvider } from '../../providers/user/user';
import { StoresProvider } from '../../providers/stores/stores';
import { ShowStorePage } from '../show-store/show-store';
import { AddstorePage } from '../addstore/addstore';


@Component({
  selector: 'page-storelist',
  templateUrl: 'storelist.html',
})
export class StorelistPage {
  public stores: Array<any>;

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
      this.navCtrl.push(ShowStorePage,s);
  }
  AddNewStore(){
      this.navCtrl.push(AddstorePage);
  }
  logout(){
      this.storage.clear();
      this.navCtrl.setRoot(LoginPage);
  }

}
