import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanguageModalPage } from 'src/app/language-modal/language-modal.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private modlCtrl:ModalController) { }

  ngOnInit() {

  }
  language (){
    this.modlCtrl.create({
      component: LanguageModalPage,
      cssClass:'lang-class'  
    }).then( modalres=> {modalres.present();
      cssclass:'cart-modal-scss'
    }) 

}
}
