import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproducts';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  productList:IProduct[];
  constructor() {
    this.productList = [
      {
        id: 100,
        name: 'LenovoThinkpd laptop',
        price: 100,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 1,
      },
      {
        id: 200,
        name: 'Dell laptop',
        price: 200,
        quantity: 3,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 1,
      },
      {
        id: 300,
        name: 'Apple 14 pro',
        price: 300,
        quantity: 0,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 2,
      },
      {
        id: 400,
        name: 'Samsung Tap',
        price: 400,
        quantity: 2,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 3,
      },
      {
        id: 500,
        name: 'samsung note 10',
        price: 500,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 2,
      },
      {
        id: 600,
        name: 'Lenovo Tap2',
        price: 600,
        quantity: 5,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 3,
      },
    ];
  }
  getAllProducts():IProduct[]{
    return this.productList;
  }
  getProductsByCategoryId(categoryId:number):IProduct[]{
    if (categoryId == 0)
    {
      return this.productList;
    }
else{
  return this.productList.filter(product=>product.categoryID==categoryId);
}
}
getProductById(productId:number):IProduct | null{
    let foundProductById=this.productList.find(product=>product.id==productId);
    return foundProductById? foundProductById:null;
  }
addNewProduct(newProduct:IProduct){
  this.productList.push(newProduct);
}
}
