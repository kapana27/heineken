import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StoresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StoresProvider {
  public stores:any;
  constructor(public http: HttpClient) {
    this.stores=[{
        name:"2 ნაბიჯი",
        date:"2018-03-05",
        check:"გიორგი პატარაია",
        img:"https://www.unicard.ge/static/wysiwygs/2-nabiji-news-eng.png"
    },
    {
        name:"3 ნაბიჯი",
        date:"2018-03-05",
        img:"https://www.unicard.ge/static/wysiwygs/2-nabiji-news-eng.png",
        check:"გიორგი პატარაია"
    },
    {
        name:"4 ნაბიჯი",
        date:"2018-03-05",
        img:"https://www.unicard.ge/static/wysiwygs/2-nabiji-news-eng.png",
        check:"გიორგი პატარაია"
    }
    ];
  }

    GetStores(){
     return this.stores;
   }



}
