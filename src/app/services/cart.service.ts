import { Injectable } from '@angular/core';
import { CartItems } from '../appStates/cartItemState';
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    let item = CartItems.find(c=>c.product.id === product.id)
    if(item){
      item.quantity++;
    }else{
      let cartItem = new CartItem()
      cartItem.quantity = 1;
      cartItem.product = product;
      CartItems.push(cartItem)
    }
  }

  removeFromCart(product:Product){
    let item = CartItems.find(c=>c.product.id === product.id)
    if(item){
      if(item.quantity>1){
        item.quantity--;
      }else{
        CartItems.splice(CartItems.indexOf(item),1)
      } 
    }
  }

  list():CartItem[]{
    return CartItems;
  }
}
