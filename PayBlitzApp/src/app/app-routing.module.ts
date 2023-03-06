import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full'
  },
  {
    path: 'child-accounts',
    loadChildren: () => import('./child-accounts/child-accounts.module').then( m => m.ChildAccountsPageModule)
  },
  {
    path: 'forgot-password-page',
    loadChildren: () => import('./forgot-password-page/forgot-password-page.module').then( m => m.ForgotPasswordPagePageModule)
  },
  {
    path: 'home-page',
    loadChildren: () => import('./home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'redeem-page',
    loadChildren: () => import('./redeem-page/redeem-page.module').then( m => m.RedeemPagePageModule)
  },
  {
    path: 'register-page',
    loadChildren: () => import('./register-page/register-page.module').then( m => m.RegisterPagePageModule)
  },
  {
    path: 'reset-password-page',
    loadChildren: () => import('./reset-password-page/reset-password-page.module').then( m => m.ResetPasswordPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
