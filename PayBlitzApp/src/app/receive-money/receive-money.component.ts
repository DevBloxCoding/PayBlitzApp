import { Component, OnInit, ViewChild } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { AlertController, IonModal, ToastController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-receive-money',
  templateUrl: './receive-money.component.html',
  styleUrls: ['./receive-money.component.scss'],
})
export class ReceiveMoneyComponent  implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  //not sure what this does
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  receveiveAmount?: number;
  private secureKey!: string;
  private secureIV!: string;
  barCodeData!: string;
  encryptedBarCodeData!: string;
  isListening: boolean = false;
  myData: any;

  constructor(private barcodeScanner: BarcodeScanner, private toastCtrl: ToastController, private alertController: AlertController) {
  }

  ngOnInit() {
    this.myData = "awe";
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


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'You are about to close the PAYME QR code!, do you want to proceed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            alert.dismiss();
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            
            this.scanBarcode();
            this.cancel();
          },
        },
      ],
    });

    await alert.present();
  }

}
