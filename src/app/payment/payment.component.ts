import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-payment',
  imports: [RouterModule,CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {


  items: any[] = [];
  totalPrice: number = 0;
  totalItems: number = 0;
   paymentDone: boolean = false;


   constructor(private cartService: CartService , ) { }


     ngOnInit(): void {
    this.items = this.cartService.getItems(); 
    this.calculateTotalPrice();
    this.calculateTotalItems();
  }


    calculateTotalPrice() {
    this.totalPrice = 0;
    this.items.forEach(item => {
      const quantity = item.quantity || 1;
      this.totalPrice += item.price * quantity;
    });
  }


  
    calculateTotalItems() {
    this.totalItems = 0;
    this.items.forEach(item => {
      this.totalItems += item.quantity || 1;
    });
  }



    payOrder() {
    this.cartService.clearCart();
    this.paymentDone = true;
    
    
  }


}
