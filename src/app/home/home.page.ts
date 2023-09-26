import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarios=[
    {
      nombre:"Marco",
      apellidos:"Suarez",
      edad:25
    },
    {
      nombre:"Juan",
      apellidos:"Perez Martinez",
      edad:5
    },
    {
      nombre:"Julian",
      apellidos:"Alvarez",
      edad:20
    },{
      nombre:"Pepe",
      apellidos:"Perez Martinez",
      edad:5
    },
  ]
  constructor() {}

}
