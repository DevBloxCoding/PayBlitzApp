import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildAccountsPageRoutingModule } from './child-accounts-routing.module';

import { ChildAccountsPage } from './child-accounts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildAccountsPageRoutingModule
  ],
  declarations: [ChildAccountsPage]
})
export class ChildAccountsPageModule {}
