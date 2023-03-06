import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemPagePage } from './redeem-page.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemPagePageRoutingModule {}
