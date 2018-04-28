import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the StoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StoresProvider {
  public stores:Array<any>;
  private store:Array<any>;
  constructor(public http: HttpClient,private storage : Storage) {

        this.AllStores();
  }

AllStores(){
  this.stores=[];
  this.storage.forEach((val,key)=>{

      if(key!='token'){
          let data=JSON.parse(val);

          this.stores.push({
              name:data.mainInfo[1].comment,
              date:data.createdate,
              update:data.update,
              check:data.mainInfo[6].comment,
              score:data.score
          });

      }
  });
  return true;
}


  GetStores(){
    if(this.AllStores()){
        return this.stores;
    }
   return [];
  }



}
