import { Product } from './../models/product';
import { cartUrl } from './../config/api';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { HttpClient  } from '@angular/common/http';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  getCartItems():Observable<CartItem[]>
  {
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result:any[])=>{
        
        let cartItems:CartItem[]=[];
        
        for(let item of result)
        {
          let productExists=false;
          for(let i in cartItems)
          {
             
             if(cartItems[i].productId===item.product.id)
             {
                productExists=true;
                alert("item is already added to the cart!!");
                break;
              }
          }
    
          if(!productExists )
          {
            //console.log(item.id);
           // console.log(item.product);
            //console.log(item.product.id);
            //console.log(item.product.tags);
          //  console.log(item.product.price);
           // console.log(cartItems);
            //cartItems.push(new CartItem(item.id,item.prodcut));
            cartItems.push(new CartItem(item.id,item.product.id,item.product.tags,item.product.price));
          }
        }

      
   
        return cartItems;
      })
    );
  }

  addProductToCart(product:Product):Observable<any>
  {
      return this.http.post(cartUrl,{product});
  }
}
