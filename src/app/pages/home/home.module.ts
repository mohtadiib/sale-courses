import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {CoursesListComponent} from "../../components/courses/courses-list/courses-list.component";
import {CartComponent} from "../../components/courses/cart/cart.component";
import {CardItemComponent} from "../../components/courses/card-item/card-item.component";
import {HeaderComponent} from "../../components/header/header.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [HomePage, CoursesListComponent, CartComponent, CardItemComponent, HeaderComponent]
})
export class HomePageModule {}
