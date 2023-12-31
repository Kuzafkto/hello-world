import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { UserInfoComponent } from './user-info/user-info.component';
import { HomePageRoutingModule } from './home-routing.module';
import { LetraApellidoPipe } from './user-info/pipes/letra-apellido.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,UserInfoComponent, LetraApellidoPipe]
})
export class HomePageModule {}
