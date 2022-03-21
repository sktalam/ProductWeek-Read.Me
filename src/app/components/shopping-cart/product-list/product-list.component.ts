import { WishlistService } from './../../../services/wishlist.service';
import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsList : Product[]=[];
  wishlist: number[]=[];
  constructor(private productService:ProductService,
    private wishListService:WishlistService) { }

  ngOnInit() {
   // this.productsList=this.productService.getProducts();
   this.loadProducts();
   this.loadWishlist();
   
  }

  loadProducts()
  {
    this.productService.getProducts().subscribe((products)=>
    {
      this.productsList=products;
      
    }
    );
  }

  loadWishlist()
  {
    this.wishListService.getWishlist().subscribe(productIds=>
    {
      //console.log(productIds);
      this.wishlist=productIds;
    });
  }

}
