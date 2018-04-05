import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {AuthHttp, JwtHelper, tokenNotExpired} from 'angular2-jwt';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  public answer: boolean=false;
  public data: Observable<any>;

  constructor(public http: HttpClient) {

  }
  login(username:string,password:string){
    var url="https://www.onlinecredit.es/wap/getToken";
    return new Promise((resolve,reject)=>{
       let headers=new HttpHeaders();
       this.http.post(url,{username:username,password:password}).subscribe(res=>{
         resolve(res);
       });
    }
  );

}

  getToken(){

  }

  is_loged(){
     return this.answer;
  }
  status(){
    return true;
  }

}
