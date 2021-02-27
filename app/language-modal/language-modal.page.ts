import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-language-modal',
  templateUrl: './language-modal.page.html',
  styleUrls: ['./language-modal.page.scss'],
})
export class LanguageModalPage implements OnInit {

  constructor(private modlCtrl:ModalController) { }

  ngOnInit() {
  }
  close(){
    this.modlCtrl.dismiss();
  }
}
