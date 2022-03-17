import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems=[
      //{id:1,productId:1,productName:'Angular',qty:4,price:100},
     // {id:2,productId:2,productName:'React',qty:3,price:200},
     // {id:3,productId:3,productName:'SpringBoot',qty:2,price:300},
     // {id:4,productId:4,productName:'Java',qty:1,price:400}
  ];

  cartTotal=0;
  constructor(private msg:MessengerService) { }

  ngOnInit() {
    //listen to the triggers
    this.msg.getMsg().subscribe(
     ( product:Product)=>
      {
       this.addProductToCart(product);
       console.log(product);
      }
      );
    
  }

  addProductToCart(product:Product)
  {
    let productExists=false;
    for(let i in this.cartItems)
    {
      if(this.cartItems[i].productId===product.id)
      {
        alert("item is already added to the cart!!");
        productExists=true;
        break;
      }
    }


    if(!productExists)
    {
      this.cartItems.push({
        productId:product.id,
        productName:product.name,
        qty:1,
        price:product.price, 
    });
    }
   

    this.cartTotal=0;

    this.cartItems.forEach( 
      items=>{
          this.cartTotal+=(items.qty*items.price);
    });
  }

}
