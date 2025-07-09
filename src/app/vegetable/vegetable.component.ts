import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-vegetable',
  imports: [RouterModule],
  templateUrl: './vegetable.component.html',
  styleUrl: './vegetable.component.css'
})
export class VegetableComponent {
 

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


