import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pay-money',
  templateUrl: './pay-money.component.html',
  styleUrls: ['./pay-money.component.scss'],
})
export class PayMoneyComponent  implements OnInit {
  payAmount?: number;
  domElement: any;
  scanning = false;

  constructor(private barcodeScanner: BarcodeScanner, private toastCtrl: ToastController) { }

  ngOnInit() {
   }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top',
      color: 'danger',
      cssClass: 'my-toast'
    });
    toast.present();
  }

  scanBarcode() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Scan QR code',
      resultDisplayDuration: 0,
      formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
      orientation: 'portrait',
    };

    this.barcodeScanner.scan(options).then((barcodeData: any) => {
      console.log('sucess', barcodeData);
    }).catch((err: any) => {
      console.log('Error', err);
    });
  }
}
