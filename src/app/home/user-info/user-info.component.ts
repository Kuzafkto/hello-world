import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from '../user';
import { UserInfoFavClicked } from '../userinfofavclicked';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent  implements OnInit {
  
@Output() onFavClicked:EventEmitter<UserInfoFavClicked>=new
EventEmitter<UserInfoFavClicked>();

@Input() usuario?:{
  nombre?:string,
  apellidos?:string,
  edad?:number,
  fav?:boolean,
}

constructor() { }

ngOnInit() {}
onFavClick(event:any){
  this.onFavClicked.emit({
    fav:!(this.usuario?.fav??false)//devolvemos el estado contrario al que tenemos
  });
  event.stopPropagation();
}

}

