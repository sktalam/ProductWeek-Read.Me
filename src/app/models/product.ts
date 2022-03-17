export class Product {
    id:number;
    name : string;
    author : string;
    price : number;
    imageurl:string;
    discount : number;
    tags: string;

    constructor(id,name,author ,price ,imageurl,discount ,tags)
    {
        this.id=id;
        this.name=name;
        this.author=author;
        this.price=price;
        this.imageurl=imageurl;
        this.discount=discount;
        this.tags=tags;
    }
 
}
