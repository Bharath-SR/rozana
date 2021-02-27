import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.page.html',
  styleUrls: ['./profile-modal.page.scss'],
})
export class ProfileModalPage implements OnInit {

  constructor(private modlCtrl:ModalController) { }

  ngOnInit() {
    }
  close(){
    this.modlCtrl.dismiss();
  }

}
