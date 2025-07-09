import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { MeatComponent } from './meat/meat.component';
import { CarrotComponent } from './carrot/carrot.component';
import { CauliflowerComponent } from './cauliflower/cauliflower.component';
import { BeetrootComponent } from './beetroot/beetroot.component';
import { BrinjalComponent } from './brinjal/brinjal.component';
import { ChickenComponent } from './chicken/chicken.component';
import { BeefComponent } from './beef/beef.component';
import { PigComponent } from './pig/pig.component';
import { GoatComponent } from './goat/goat.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SaveItemsComponent } from './save-items/save-items.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [
     {
        path : '',
        redirectTo:'/home',
        pathMatch : 'full'
    },

    {
        path : 'home',
        component : HomeComponent
    },
    {
        path : 'register',
        component : RegisterComponent
    },
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'cart',
        component : CartComponent
    },
    {
        path : 'vegetable',
        component : VegetableComponent
    },
    {
        path : 'meat',
        component : MeatComponent
    },
    {
        path : 'carrot',
        component : CarrotComponent
    },
    {
        path : 'cauliflower',
        component : CauliflowerComponent
    },
    {
        path : 'beetroot',
        component : BeetrootComponent
    },
    {
        path : 'brinjal',
        component : BrinjalComponent
    },
    {
        path : 'chicken',
        component : ChickenComponent
    },
    {
        path : 'beef',
        component : BeefComponent
    },
    {
        path : 'pig',
        component : PigComponent
    },
    {
        path : 'goat',
        component : GoatComponent
    },
    {
        path : 'save',
        component : SaveItemsComponent
    },
    {
        path : 'billing',
        component : BillingDetailsComponent
    },
    {
        path : 'payment',
        component : PaymentComponent
    }
];
