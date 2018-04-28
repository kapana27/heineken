import { Component,ViewChild } from '@angular/core';
import {StorelistPage} from '../storelist/storelist';
import {StoreModalPage} from '../store-modal/store-modal';
import { AddStoreProvider } from '../../providers/add-store/add-store';
import { ScoreProvider } from '../../providers/score/score';

import { IonicPage, NavController, NavParams,Slides,LoadingController ,ModalController,AlertController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
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
  name:string="";
  public slide: any;
  public params:any;
  public showFooter: boolean=true;
  public  showBack: boolean=false;
  public currentIndex: any=0;
  gaming: string = "n64";
  gender: string = "f";
  os: string;
  music: string;
  nextBtn:string="შემდეგი";
  month: string;
  year: number;
  visible:number=0;
  storeScore:number=0;
  header:string="მაღაზიის დამატება";
  musicAlertOpts: { title: string, subTitle: string };
  dialog:any;
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public modalCtrl: ModalController,
              private store: AddStoreProvider,
              public alertCtrl: AlertController,
              public score:ScoreProvider
            ) {
                this.header='Availability and Price';
                this.name=navParams.data.name;
                if(this.store.setName(this.name)){
                  this.params=JSON.parse(this.store.GetParramsData()[this.name]);
                  this.params['mainInfo'][1].comment=this.name;
                }


   }


  ionViewDidLoad() {

  }
  stpSelect() {
    console.log('STP selected');
  }

  equalPrice(param){
    if(param.equal){
      param.notequal=false;
    }
  }

  notEqual(param){
      if(param.notequal){
        param.equal=false;
      }

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
            param.notequal=false;
            }
          }
        },
        {
          text: 'Save',
          handler: data => {
              if(data.Price==undefined || data.Price==null || data.Price==""){
                param.notequal=true;
              }
              param.comment=data.Price;


          }
        }
      ]
    });
    if(!param.equal){
      prompt.present();
    }
  }

  openModal(s) {
    this.dialog = this.modalCtrl.create(StoreModalPage, s);
    this.dialog.present();
  }
  showComment(s){

      this.visible=s.id;
  }
  slideChanged(){

    this.currentIndex = this.slides.getActiveIndex();
      switch(this.currentIndex){
        case 0:this.header='Information '; break;
          case 1:this.header='Availability and Price'; break;
            case 2:this.header='Visibility'; break;
              case 3:this.header='Shelf Planogram'; break;
                case 4:this.header='Quality'; break;
                  case 5:this.header=this.name; break;
          default: break;
        }


      if(this.currentIndex==5){
        this.showFooter=false;
      }else{
        (this.currentIndex==4)?  this.nextBtn="დასრულება":this.nextBtn="შემდეგი";
          this.showFooter=true;
      }
      if(this.currentIndex==0){
        this.showBack=false;
      }else{
          this.showBack=true;
      }
    }
    next(){
      if(this.slides.getActiveIndex()==4){
          this.finish();
      }
      this.slides.slideNext(200);
    }
    back(){
      this.slides.slidePrev(200);
    }
    finish(){

      let loader = this.loadingCtrl.create({
        content: "Please wait..."
      });
      let confirm = this.alertCtrl.create({
            title: 'მაღაზიის დამატება?',
            message: 'დარწმუნებული ხართ რომ გსურთ "'+this.name+'" დამატება',
            buttons: [
              {
                text: 'Disagree',
                handler: () => {

                }
              },
              {
                text: 'Agree',
                handler: () => {
                  if(this.storeScore=this.score.calculate(this.params)){
                    this.params.score=this.storeScore;
                    let ScoreConfirm = this.alertCtrl.create({
                      title: 'Score',
                      message: 'Score is '+this.storeScore,
                      buttons: [

                        {
                          text: 'ok',
                          handler: () => {
                            loader.present();
                            if(this.store.save(this.name,this.params)){
                              setTimeout(() => {
                                loader.dismiss();
                                  this.navCtrl.setRoot(StorelistPage,{data:"reload"});
                              }, 1000);
                            }
                          }
                        }
                      ]
                    });
                    ScoreConfirm.present();
                  }else{
                    let alert = this.alertCtrl.create({
                       title: 'message',
                       subTitle: 'Please, fill in all fields',
                       buttons: ['Dismiss']
                      });
                      alert.present();
                  }
                }
              }
            ]
          });

        confirm.present();

    }
    ChangeNa(data){
        if(data.na){
            data.avaliable=false;
            data.disabled=true;
            data.equal=false;
        }
    }
    dismiss(){
     this.dialog.dismiss();
   }


}
