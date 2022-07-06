import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Subject } from 'rxjs';
import { Data } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 odata: Data [] =[{
      id:1,
      color:"rojo",
      name:"bag",
      type:"bag"
 }
,{
  id:2,
  color:"azul",
  name:"otro",
  type:"dato"
},{
  id:3,
  color:"verde",
  name:"tercer",
  type:"dato"
}]

 undato$ = new Subject<Data | null>();
  datos$ = new BehaviorSubject<Data[]>(this.odata);

constructor() { }

getData(){

return this.datos$.asObservable();
}

}
