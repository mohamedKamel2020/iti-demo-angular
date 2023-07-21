import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproducts';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  prdList:IProduct[];
  catList:ICategory[];
  orderTotalPrice:number=0;
  selectedCatID:number=0;
  constructor()
  {
    this.catList=[
      {id:1,name:'Laptop'},
      {id:2,name:'Mobile'},
      {id:3,name:'Tap'},
    ]
    this.prdList=[
      {id:100,name:'LenovoThinkpd laptop',price:100,quantity:1,imgURL:'https://fakeimg.pl/200x100',categoryID:1},
      {id:200,name:'Dell laptop',price:200,quantity:3,imgURL:'https://fakeimg.pl/200x100',categoryID:1},
      {id:300,name:'Apple 14 pro',price:300,quantity:0,imgURL:'https://fakeimg.pl/200x100',categoryID:2},
      {id:400,name:'Samsung Tap',price:400,quantity:2,imgURL:'https://fakeimg.pl/200x100',categoryID:3},
      {id:500,name:'samsung note 10',price:500,quantity:1,imgURL:'https://fakeimg.pl/200x100',categoryID:2},
      {id:600,name:'Lenovo Tap2',price:600,quantity:5,imgURL:'https://fakeimg.pl/200x100',categoryID:3}
    ]
  }
  ngOnInit():void{

  }
  prdTrackByFn(index:number,prd:IProduct){
    return prd.id;
  }
  buy(prdPrice:number,count:string){
    // let itemsCount:number=count; //implicit casting
    // let itemsCount:number;
    // itemsCount=parseInt(count); explicit casting
    // itemsCount=Number(count); explicit casting
    // itemsCount=count as number;
    // itemsCount=+count+10;
    this.orderTotalPrice=+count*prdPrice;
    }
    changeCat(){
      this.selectedCatID=1;
    }

}
