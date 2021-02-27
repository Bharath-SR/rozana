import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartPage } from 'src/app/cart/cart.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private modlCtrl:ModalController) { }

  ngOnInit() {
  }

  cart(){
    this.modlCtrl.create({
      component: CartPage,
      cssClass:'cart-class'  
    }).then( modalres=> {modalres.present();
      cssclass:'cart-modal-scss'
    }) 

  }
}
