import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent  implements OnInit {

@Input() usuario?:{
  nombre:string,
  apellidos:string,
  edad:number
}

  constructor() { }

  ngOnInit() {}

}
