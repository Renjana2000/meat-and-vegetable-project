import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-meat',
  imports: [RouterModule],
  templateUrl: './meat.component.html',
  styleUrl: './meat.component.css'
})
export class MeatComponent {


    constructor(private cartService: CartService) {}

 


    addToCart(product: any) {
    if (this.cartService.itemExists(product)) {
      alert(`${product.name} already exists in cart.`);
    } else {
      this.cartService.addToCart(product);
      alert(`${product.name} added to cart.`);
    }
  }

}
