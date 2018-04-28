import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ScoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ScoreProvider {
  counter:number;
  avaliable:number;
  score:number;
  constructor(public http: HttpClient) {
    this.counter=0;
    this.avaliable=0;
    this.score=0;
  }

  calculate(data){

    for(let i=1;i<5;i++){
      for(let key of data['step'+i]) {
        for(let key of data['step'+i]) {
            if(!key.na){
                this.counter++;
                if(key.avaliable){
                    this.avaliable++;
                }
            }
        }

      }
    }

    return this.score=Math.round(this.avaliable/this.counter*100);
  }
}
