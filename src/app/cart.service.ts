import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: any[] = [];
  private itemsSubject = new BehaviorSubject<any[]>(this.items);

  items$ = this.itemsSubject.asObservable();

  private savedItems: any[] = []; 
  private savedItemsSubject = new BehaviorSubject<any[]>(this.savedItems); 
  savedItems$ = this.savedItemsSubject.asObservable();


   constructor() {
    const savedItems = localStorage.getItem('cartItems');
    if (savedItems) {
      this.items = JSON.parse(savedItems);
      this.itemsSubject.next(this.items);
    }
  }

   addToCart(product: any) {
    this.items.push(product);
    localStorage.setItem('cartItems', JSON.stringify(this.items)); 
    this.itemsSubject.next(this.items); 
  }


    itemExists(product: any): boolean {
    return this.items.some(item => item.name === product.name);
  }


  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem('cartItems'); 
    this.itemsSubject.next(this.items);
    return this.items;
  }


  updateItems(items: any[]) {
  this.items = items;
  this.itemsSubject.next(this.items);
}

 

// saveItems(items: any[]) {
//   const saved = localStorage.getItem('savedItems');
//   let savedItems = [];
//   if (saved) {
//     savedItems = JSON.parse(saved);
//   }


//   const itemsWithDate = items.map(item => ({
//     ...item,
//     date: new Date().toLocaleDateString()
//   }));


//   savedItems = [...savedItems, ...itemsWithDate];
//   this.savedItems = savedItems;
//   this.savedItemsSubject.next(this.savedItems);
//   localStorage.setItem('savedItems', JSON.stringify(this.savedItems));
// }



saveItems(items: any[]) {
  const saved = localStorage.getItem('savedItems');
  let savedItems = [];
  if (saved) {
    savedItems = JSON.parse(saved);
  }

  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0'); // day first
  const month = String(today.getMonth() + 1).padStart(2, '0'); // then month
  const year = today.getFullYear();
  const formattedDate = `${day}/${month}/${year}`; // day/month/year

  const itemsWithDate = items.map(item => ({
    ...item,
    date: formattedDate
  }));

  savedItems = [...savedItems, ...itemsWithDate];
  this.savedItems = savedItems;
  this.savedItemsSubject.next(this.savedItems);
  localStorage.setItem('savedItems', JSON.stringify(this.savedItems));
}








  getSavedItems() {
    const saved = localStorage.getItem('savedItems');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  }



}
