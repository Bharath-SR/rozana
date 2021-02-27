import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SettingsPageModule } from './tabs/settings/settings.module';
const routes: Routes = [
 {
    path:'tabs',
    loadChildren:()=>import('./tabs/tabs.module').then(m=>m.TabsPageModule)
  },
  {
     path: 'login',
     loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
 {
  path: 'forgot-password',
  loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'settings',
    loadChildren: ()=>import('./tabs/settings/settings.module').then(m=>SettingsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'profile-modal',
    loadChildren: () => import('./profile-modal/profile-modal.module').then( m => m.ProfileModalPageModule)
  },
  {
    path: 'language-modal',
    loadChildren: () => import('./language-modal/language-modal.module').then( m => m.LanguageModalPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
  },
  {
    path: 'address-book',
    loadChildren: () => import('./address-book/address-book.module').then( m => m.AddressBookPageModule)
  },
  {
    path: 'search-page',
    loadChildren: () => import('./search-page/search-page.module').then( m => m.SearchPagePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },{
    path:'category',
    loadChildren: () => import('./tabs/categories/categories.module').then( m => m.CategoriesPageModule)

  }
  

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

