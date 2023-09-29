import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, ToastOptions } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { UserInfoFavClicked } from './userinfofavclicked';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  private _users:BehaviorSubject<User[]>= new BehaviorSubject<User[]>([]);
  users$:Observable<User[]>=this._users.asObservable()

  constructor(
    private router:Router,
    private toast:ToastController
  ) {}
   onFavClicked(user:User, event:UserInfoFavClicked){
    console.log(user,event);
    const users=[...this._users.value];
    var index=users.findIndex((_user=>_user.id==user.id));
    if(index>=0)
    users[index].fav=event.fav??false;
    this._users.next([...users]);

    const options:ToastOptions={
      message:`User ${event.fav?'added ':'removed '} ${event.fav?'to ':'from '}favourites`,
      duration:1000,
      position:'bottom',
      color:'danger',
      cssClass:'fav-ion-toast'
    };  
    this.toast.create(options).then(toast=>toast.present());
  }
  ngOnInit():void{
    var usuarios:User[] = [
      {id:1, nombre:"Javier", apellidos:"Miguel Martín Gallardo", edad:19, fav:true},
      {id:2, nombre:"Adrian", apellidos:"Perogil Fernandez", edad:25, fav:true},
      {id:3, nombre:"Denisa", apellidos:"Ramona Belean", edad:19, fav:false},
      {id:4, nombre:"Marco", apellidos:"Valente", edad:19, fav:true},
      {id:5, nombre:"Jesus", apellidos:"Herrera", edad:19, fav:false}
    ];
    this._users.next(usuarios);
  }
}
