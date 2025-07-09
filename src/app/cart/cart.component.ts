import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {


  items: any[] = [];
  totalPrice: number = 0; 
   totalItems: number = 0;

  constructor(private cartService: CartService) { }



ngOnInit(): void {
  this.cartService.items$.subscribe((items: any[]) => { 
    this.items = items;
    this.calculateTotalPrice();
    this.calculateTotalItems();
  });
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


  removeFromCart(index: number) {
    this.items.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(this.items));
    this.cartService.updateItems(this.items);
    this.calculateTotalPrice();
    this.calculateTotalItems(); 
  }


incrementQuantity(index: number) {
  if (!this.items[index].quantity) {
    this.items[index].quantity = 1;
  }
  this.items[index].quantity++;
  this.totalPrice += this.items[index].price;
  localStorage.setItem('cartItems', JSON.stringify(this.items));
  this.cartService.updateItems(this.items);
   this.calculateTotalItems();
}


decrementQuantity(index: number) {
  if (!this.items[index].quantity) {
    this.items[index].quantity = 1;
  }
  if (this.items[index].quantity > 1) {
    this.items[index].quantity--;
    this.totalPrice -= this.items[index].price;
    localStorage.setItem('cartItems', JSON.stringify(this.items));
    this.cartService.updateItems(this.items);
    this.calculateTotalItems();
  }
}

  
  addToTotalPrice(item: any) {
    const quantity = item.quantity || 1; 
    this.totalPrice += item.price * quantity;
  }


  save() {
    this.cartService.saveItems(this.items);
    alert("Items saved successfully");
  }


}
