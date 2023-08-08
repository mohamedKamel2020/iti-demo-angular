import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss'],
})
export class OrderMasterComponent implements AfterViewInit{
  catList: ICategory[];
  selectedCatID: number = 0;
  receivedOrderTotalPric: number = 0;
  //I used viewChild for access in class to element from html
  //clientNameInput?:ElementRef;//optional
  @ViewChild('clientName') clientNameInput!:ElementRef;//non-null asseration operator
  @ViewChild(ProductListComponent) ProductListComponentObject!:ProductListComponent;
  constructor() {
    this.catList = [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Mobile' },
      { id: 3, name: 'Tap' },
    ];
  }
  ngAfterViewInit(): void {
    this.clientNameInput.nativeElement.value="Your name here";
    this.clientNameInput.nativeElement.style.border="2px solid red";
  }
  //Event subscrib
  onTotalPriceChaged(totalPrice: number) {
    this.receivedOrderTotalPric = totalPrice;
  }
}
