import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-save-items',
  imports: [RouterModule,CommonModule],
  templateUrl: './save-items.component.html',
  styleUrl: './save-items.component.css'
})
export class SaveItemsComponent implements OnInit {


    savedItems: any[] = [];
    total: number = 0;


     constructor(private cartService: CartService) { }


    ngOnInit(): void {
    this.savedItems = this.cartService.getSavedItems();
    this.calculateTotal(); 
  }
  


    calculateTotal() {
    this.total = 0;
    this.savedItems.forEach(item => {
      const quantity = item.quantity || 1;
      this.total += item.price * quantity;
    });
  }

}
