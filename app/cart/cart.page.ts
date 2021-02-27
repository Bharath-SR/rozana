import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private modlCtrl:ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modlCtrl.dismiss();
  }

}
