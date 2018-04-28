import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the AddStoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddStoreProvider {
  params:Array<any>=[];
  name:string;
  index:number=0;
  storeName:string;
  constructor(public http: HttpClient,private storage : Storage) {


  }
  setName(name){
      this.name=name;
      if(this.SetParamsData()){
        return true;
      }
      return false;
  }

  GetParramsData(){
      return this.params;
  }
  SetParamsData(){

    this.params[this.name]=JSON.stringify({
      "update":"no",
      "createdate":"2018-04-25",
      "updatedate":"",
      "mainInfo":[{
            "id":1,
            "type":"header",
            "name":"OUTLET INFO"
          },
          {
            "id":2,
            "name":"Name Outlet",
            "comment":"",
            "type":"text"
          },
          {
            "id":3,
            "name":"Outlet ID/Number",
            "comment":"",
            "type":"text"
          },
          {
            "id":4,
            "name":"Address Outlet",
            "comment":"",
            "type":"text"
          },
          {
            "id":5,
            "name":"Date of Visit",
            "comment":"2018-04-25",
            "type":"date"
          },{
            "id":6,
            "type":"header",
            "name":"COACH INFO"
            },
            {
              "id":7,
              "name":"Name Coach",
              "comment":"demo",
              "type":"text"
            },
            {
              "id":7,
              "name":"Address Outlet",
              "comment":"demo",
              "type":"text"

            }
        ],
        "step1": [
          {
            "id": 1,
            "name": "Heineken Can",
            "size": "500",
            "price": "2.90",
            "avaliable": false,
            "equal": false,
            "comment": "",
            "type":"checkbox",
            "na":false
          },
          {
            "id": 2,
            "name": "Heineken Can",
            "size": "330",
            "price": "2.45",
            "avaliable": false,
            "equal": false,
            "comment": "",
            "type":"checkbox",
              "na":false
          },
          {
            "id": 3,
            "name": "Heineken Bottle",
            "size": "500",
            "price": "3.50",
            "avaliable": false,
            "equal": false,
            "comment": "",
            "type":"checkbox",
            "na":false
          },
          {
            "id": 4,
            "name": "Krusovice",
            "size": "",
            "price": "",
            "avaliable": false,
            "equal": false,
            "comment": "",
            "type":"checkbox",
            "na":false
          },
          {
            "id": 5,
            "name": "Icy",
            "size": "",
            "price": "",
            "avaliable": false,
            "equal": false,
            "comment": "",
            "type":"checkbox",
            "na":false
          }
        ],
        "step2": [
          {
            "id": 6,
            "index": "A",
            "zone": "Entrance",
            "tool": "Big Secondary Placement (display, pallet island and etc.)",
            "avaliable": false,
            "comment": "",
            "disabled": true,
            "visible": true,
            "type":"checkbox",
            "na":false
          },
          {
            "id": 7,
            "index": "B",
            "zone": "Primary Shelve",
            "tool": "Shelf-talkers",
            "avaliable": false,
            "comment": "",
            "disabled": true,
            "visible": true,
            "type":"checkbox",
            "na":false
          },
          {
            "id": 8,
            "index": "B",
            "zone": "Primary Shelve",
            "tool": "Price tags",
            "avaliable": false,
            "comment": "",
            "disabled": true,
            "visible": true,
            "type":"checkbox",
            "na":false
          },
          {
            "id": 9,
            "index": "C",
            "zone": "Golden Zone",
            "tool": "Fridge branded with Priority Brand (Heineken in this case)",
            "avaliable": false,
            "comment": "",
            "disabled": true,
            "visible": true,
            "type":"checkbox",
            "na":false
          },
          {
            "id": 10,
            "index": "D",
            "zone": "Beer Category",
            "tool": "Secondary Placement (display, gondola head, pallet island and etc.)",
            "avaliable": false,
            "comment": "",
            "disabled": true,
            "visible": true,
            "type":"checkbox",
            "na":false
          }
        ],
          "step3": [
          {
            "id": 11,
            "index": "Heineken Fridge",
            "zone": "All our Brands",
            "tool": "Heineken Fridge Planogram in Place",
            "avaliable": false,
            "comment": "",
            "disabled": true,
            "visible": true,
            "type":"single",

          },
          {
            "id":12,
            "type":"header",
            "name":"Shared Shelf"
          },
          {
            "id": 13,
            "index": "Shared Shelf",
            "zone": "Heineken",
            "tool": "Category of imported beer: Min 1 facing more than competitors (Lowenbrau, Estrella, Krombacher, Efes)",
            "avaliable": false,
            "comment": "",
            "disabled": true,
            "visible": true,
            "type":"block",
            "na":false
          },
          {
            "id": 14,
            "index": "Shared Shelf",
            "zone": "Krusovice",
            "tool": "Category of Georgian beer: Krusovიce to be placed next to competitors (Staropramen, Kozel, Konig Pilsner, Bavaria)",
            "avaliable": false,
            "comment": "",
            "disabled": true,
            "visible": true,
            "type":"block",
            "na":false
          },
          {
            "id": 15,
            "index": "Shared Shelf",
            "zone": "Icy",
            "tool": "Category of Georgian beer: Icy to be placed next to competitors (Natakhtari and Zedazeni)",
            "avaliable": false,
            "comment": "",
            "disabled": true,
            "visible": true,
            "type":"block",
            "na":false
          }
        ], "step4": [
          {
            "id": 16,
            "quality": "Is the FIFO method used to manage stocks?	",
            "avaliable": false,
            "comment": "",
            "disabled": true,
            "visible": true,
            "na":false
          },
          {
            "id": 17,
            "quality": "Fridge lights switched on and fully working?	",
            "avaliable": false,
            "comment": "",
            "disabled": true,
            "visible": true,
            "na":false
          },
          {
            "id": 18,
            "quality": "Is the chiller cooling at the correct temperature?		",
            "avaliable": false,
            "comment": "",
            "disabled": true,
            "visible": true,
            "na":false
          },
          {
            "id": 19,
            "quality": "Is the chiller stocked according to the agreed planogram?	",
            "avaliable": false,
            "comment": "",
            "disabled": true,
            "visible": true,
            "na":false
          }

        ]
      });

      return true;
  }

  private GetParamById(id){
      this.index=0;
      if(this.params.length>0){

        for(let key of this.params) {
            if(key.id==id){
                return this.index;
            }
            this.index+=1;
        }
      }
      return false;
  }
  DeleteElement(index){

    if(index >-1){

      this.params.splice(index, 1);
      return true;
    }
    return false;
  }

  SaveElementByindex(id,data){

        this.params[id].name=data.name;
        this.params[id].size=data.size;
        this.params[id].price=data.price;
        this.params[id].avaliable=data.avaliable;
        this.params[id].equal=data.equal;
        this.params[id].comment=data.comment;
      
        console.log(JSON.stringify(this.params));
        //this.storage.set("Heineken",JSON.stringify(this.params));

        return true;
  }



  save(name,obj){

      this.storage.set(name,JSON.stringify(obj));
      return true;
  }
}
