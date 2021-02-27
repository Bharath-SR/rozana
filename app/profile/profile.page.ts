import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileModalPage } from '../profile-modal/profile-modal.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private modlCtrl:ModalController) { }

  ngOnInit() {
  }
  edit (){
    this.modlCtrl.create({
      component: ProfileModalPage,
      cssClass:'cart-class'  
    }).then( modalres=> {modalres.present();
      cssclass:'cart-modal-scss'
    }) 
}
}