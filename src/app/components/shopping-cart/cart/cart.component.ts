import { CartItem } from './../../../models/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems=[];

  cartTotal=0;
  constructor(private msg:MessengerService,
    private cartService : CartService
    ) { }

  ngOnInit()
  {
    this.handleSubscription();
    this.loadCartItems();
    
  }
  handleSubscription()
  {
    this.msg.getMsg().subscribe(
      ( product:Product)=>
       {
        this.loadCartItems();
       }
       );
  }


  loadCartItems()
  {
      this.cartService.getCartItems().subscribe((items:CartItem[])=>{
        this.cartItems=items;
        this.calculateCartTotal();
      })
  }


  calculateCartTotal()
  {
    this.cartTotal=0;

    this.cartItems.forEach( 
      items=>{
          this.cartTotal+=(items.qty*items.price);
    });
  }

}
