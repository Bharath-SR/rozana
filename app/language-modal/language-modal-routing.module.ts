import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguageModalPage } from './language-modal.page';

const routes: Routes = [
  {
    path: '',
    component: LanguageModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguageModalPageRoutingModule {}
