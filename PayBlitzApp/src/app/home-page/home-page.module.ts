import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePagePageRoutingModule } from './home-page-routing.module';

import { HomepagePage } from './home-page.page';
import { TransactionRecordsComponent } from '../transaction-records/transaction-records.component';
import { PayMoneyComponent } from '../pay-money/pay-money.component';
import { ReceiveMoneyComponent } from '../receive-money/receive-money.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePagePageRoutingModule,
    QRCodeModule
  ],
  providers:[BarcodeScanner],
  declarations: [HomepagePage,TransactionRecordsComponent,PayMoneyComponent,ReceiveMoneyComponent]
})
export class HomePagePageModule {}
