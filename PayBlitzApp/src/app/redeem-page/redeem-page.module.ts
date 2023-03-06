import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemPagePageRoutingModule } from './redeem-page-routing.module';

import { RedeemPagePage } from './redeem-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemPagePageRoutingModule
  ],
  declarations: [RedeemPagePage]
})
export class RedeemPagePageModule {}
