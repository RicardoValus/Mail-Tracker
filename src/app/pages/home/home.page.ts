import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: any;
  eventsCollection: any = [] = [];
  constructor(private mailService: MailService, private toastCtrl: ToastController) { }

  findObject(event: any) {
    let objectCode: string = event.detail.value;

    if (objectCode.length < 3) {
      return;
    }

    this.mailService.locateObject(objectCode)
      .then((response: any) => {
        const mail: any = response;

        // console.log(this.mail.objetos[0].eventos);

        this.eventsCollection = mail.objetos[0].eventos;

        if (this.eventsCollection == undefined) {
          this.sendToast('Objeto não encontrado');
          return;
        }
      })
      .catch((error: any) => {
        this.sendToast('Objeto não encontrado');
      });
  }

  async sendToast(mensagem: string) {
    const toast = await this.toastCtrl.create({
      message: mensagem,
      color: 'dark',
      // duration: 1500,
    });

    await toast.present();
  }
}


