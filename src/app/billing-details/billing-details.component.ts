import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-billing-details',
  imports: [RouterModule,CommonModule],
  templateUrl: './billing-details.component.html',
  styleUrl: './billing-details.component.css'
})
export class BillingDetailsComponent {
    todayDate = new Date().toLocaleDateString();

     items: any[] = [];
    totalAmount: number = 0;

    constructor(private cartService: CartService) {}

      ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.calculateTotal();
  }


    calculateTotal() {
    this.totalAmount = 0;
    this.items.forEach(item => {
      const quantity = item.quantity || 1;
      this.totalAmount += item.price * quantity;
    });
  }



}
