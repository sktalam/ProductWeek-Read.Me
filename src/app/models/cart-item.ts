import { Product } from './product';
export class CartItem 
{
    id:number;
    productId:number;
    productName:string;
    qty:number;
    price:number;
    

    /*constructor(id:number,product:Product,qty=1)
    {
        console.log(id);
        console.log(product);
        this.id=id;
        this.productId=product.id;
        this.productName=product.tags;
        this.price=product.price;
        this.qty=qty
    }*/
    constructor(id:number,productID:number,productTag:string,price:number,qty=1)
    {
        console.log(id);
        //console.log(product);
        this.id=id;
        this.productId=productID;
        this.productName=productTag;
        this.price=price;
        this.qty=qty
    }
}
