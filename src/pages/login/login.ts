import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage,Nav,Platform, NavController, NavParams,AlertController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from  'rxjs/Observable';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public data:boolean;
  public username:string;
  public password:string;
  public user:any;
  public result:any;
  constructor(private storage: Storage,public navCtrl: NavController, public navParams: NavParams, private http: HttpClient , private UserService: UserProvider,private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  auth(){
    this.UserService.login(this.username,this.password).then(result=>{
        this.result=result;
        if(this.result.res=="yes"){
            this.storage.set("token",this.result.token);
            this.navCtrl.setRoot(HomePage);
        }else{
          let alert = this.alertCtrl.create({
           title: 'Error',
           subTitle: 'Username or Password is incorrect',
           buttons: ['close']
          });
          alert.present();
        }
    });

  }


}
