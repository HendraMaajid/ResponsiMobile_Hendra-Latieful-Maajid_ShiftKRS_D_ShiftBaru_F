import { Component, OnInit } from '@angular/core';
import { PahlawanService, Pahlawan } from '../services/pahlawan.service';
import { Observable } from 'rxjs';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pahlawan-list',
  templateUrl: './pahlawan-list.page.html',
  styleUrls: ['./pahlawan-list.page.scss'],
})
export class PahlawanListPage implements OnInit {
pahlawan$: Observable<Pahlawan[]> = new Observable<Pahlawan[]>();

  constructor(
    private pahlawanservice: PahlawanService,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.pahlawan$ = this.pahlawanservice.getAllPahlawan();
  }


  editPahlawan(pahlawan: Pahlawan) {
    if (pahlawan.id) {
      this.router.navigate(['/pahlawan-form', pahlawan.id]);
    }
  }

  async confirmDelete(pahlawan: Pahlawan) {
    const alert = await this.alertController.create({
      header: 'Konfirmasi Hapus',
      message: `Apakah Anda yakin ingin menghapus pahlawan "${pahlawan.nama}"?`,
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Hapus',
          role: 'destructive',
          handler: () => {
            this.deletePahlawan(pahlawan);
          }
        }
      ]
    });

    await alert.present();
  }

  async deletePahlawan(pahlawan: Pahlawan) {
    try {
      if (pahlawan.id) {
        await this.pahlawanservice.deletePahlawan(pahlawan.id);
        const toast = await this.toastController.create({
          message: 'Pahlawan berhasil dihapus',
          duration: 2000,
          color: 'success'
        });
        await toast.present();
      }
    } catch (error) {
      const toast = await this.toastController.create({
        message: 'Gagal menghapus pahlawan',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }

}
