import { Component,ViewChild } from '@angular/core';
import {StorelistPage} from '../storelist/storelist';

import { IonicPage, NavController, NavParams,Slides,LoadingController } from 'ionic-angular';

/**
 * Generated class for the AddstorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addstore',
  templateUrl: 'addstore.html',
})
export class AddstorePage {
  public event = {
     month: '1990-02-19',
     timeStarts: '07:43',
     timeEnds: '1990-02-20'
   }

  public slide: any;
  public showFooter: boolean=true;
  public  showBack: boolean=false;
  public currentIndex: any=0;
  gaming: string = "n64";
  gender: string = "f";
  os: string;
  music: string;
  month: string;
  year: number;

  musicAlertOpts: { title: string, subTitle: string };
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
    this.musicAlertOpts = {
     title: '1994 Music',
     subTitle: 'Select your favorite'
   };
    this.slide = [
      {
        title: "Welcome to the Docs!",
        description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
        image: "https://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-1.png",
      },
      {
        title: "What is Ionic?",
        description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
        image: "https://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-2.png",
      },
      {
        title: "What is Ionic Cloud?",
        description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
        image: "https://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-3.png",
      }
    ];
  }

  ionViewDidLoad() {

  }
  stpSelect() {
    console.log('STP selected');
  }
  slideChanged(){
      this.currentIndex = this.slides.getActiveIndex();
      if(this.currentIndex==2){
        this.showFooter=false;
      }else{
          this.showFooter=true;
      }
      if(this.currentIndex==0){
        this.showBack=false;
      }else{
          this.showBack=true;
      }
    }
    next(){
      this.slides.slideNext(200);
    }
    back(){
      this.slides.slidePrev(200);
    }
    CreateStore(){

         let loader = this.loadingCtrl.create({
           content: "Please wait..."
         });
         loader.present();
      setTimeout(() => {
          loader.dismiss();
          this.navCtrl.setRoot(StorelistPage);
      }, 3000);

    }
}
