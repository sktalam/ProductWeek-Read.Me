import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';


const apiUrl='http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 /* products : Product[]=[
    new Product(1,"The Complete Angular Developer Course ",
    "John",499,"/assets/images/HashedIn_Logo.jpeg",10,"Angular "),
    new Product(2,"The Complete React Developer Course ",
    "John",599,"/assets/images/HashedIn_Logo.jpeg",10,"Angular "),
    new Product(3,"The Complete SpringBoot Developer Course ",
    "John",699,"/assets/images/HashedIn_Logo.jpeg",10,"Angular "),
    new Product(4,"The Complete Java Developer Course ",
    "John",799,"/assets/images/HashedIn_Logo.jpeg",10,"Angular "),
    new Product(5,"The Complete Python Developer Course ",
    "John",899,"/assets/images/HashedIn_Logo.jpeg",10,"Angular "),
    new Product(6,"The Complete ML Developer Course ",
    "John",999,"/assets/images/HashedIn_Logo.jpeg",10,"Angular "),
    new Product(7,"The Complete DevOps Developer Course ",
    "John",1099,"/assets/images/HashedIn_Logo.jpeg",10,"Angular "),
    new Product(8,"The Complete DevOps Developer 2 Course ",
    "John",1199,"/assets/images/HashedIn_Logo.jpeg",10,"Angular "),
  ];*/
  constructor(private http:HttpClient) { }

  getProducts() : Observable<Product[]>
  {
      return this.http.get<Product[]>(apiUrl);
  }
}
