import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildAccountsPage } from './child-accounts.page';

const routes: Routes = [
  {
    path: '',
    component: ChildAccountsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildAccountsPageRoutingModule {}
