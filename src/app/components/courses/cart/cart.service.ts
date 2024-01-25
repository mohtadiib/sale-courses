import { Injectable } from '@angular/core';
import {CourseModel} from "../../models/course_model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList:CourseModel[] = []
  wishList:CourseModel[] = []
  //Alert Dialog Arguments
  alertTitle:string = ""
  alertMessage:string = ""
  alertIsOpen:boolean = false
  constructor() { }
  //Cart Functionality
  addToCart(course:CourseModel){
    this.addToList(course,this.cartList,"Cart")
  }
  removeFromCart(course:CourseModel){
    this.removeFromList(course,this.cartList)
  }
  //WishList Functionality
  addToWishList(course:CourseModel){
    this.addToList(course,this.wishList,"WishList")
  }
  removeFromWishList(course:CourseModel){
    this.removeFromList(course,this.wishList)
  }

  //Lists Functionality *******************
  removeFromList(course:CourseModel,courseList:CourseModel[]){
    const index = this.cartList.indexOf(course)
    this.cartList.splice(index,1)
  }
  addToList(course:CourseModel,courseList:CourseModel[],listName:string){
    const model = courseList.find(value => value === course)
    if (!model){
      courseList.push(course)
      this.alertTitle = "Success"
      this.alertMessage = "Course successfully added in the "+listName
    }else{
      if (listName === "WishList"){
        this.removeFromWishList(course)
        this.alertTitle = "Removed"
        this.alertMessage = "Course Removed From WishList"
      }else{
        this.alertTitle = "Wrong!"
        this.alertMessage = "Already exists in the cart"
      }
    }
  }
}
