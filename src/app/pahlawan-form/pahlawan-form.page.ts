import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PahlawanService, Pahlawan } from '../services/pahlawan.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pahlawan-form',
  templateUrl: './pahlawan-form.page.html',
  styleUrls: ['./pahlawan-form.page.scss'],
})
export class PahlawanFormPage implements OnInit {

  pahlawanForm: FormGroup;
  isEditing = false;
  pahlawanId: string = '';

  constructor(
    private fb: FormBuilder,
    private pahlawanservice: PahlawanService,
    private router: Router,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.pahlawanForm = this.fb.group({
      nama: ['', Validators.required],
      kisah: ['', Validators.required],
      imageUrl: ['']
    });
  }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.pahlawanId = idParam;
      this.isEditing = true;
      this.loadPahlawan();
    }
  }

  async loadPahlawan() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...'
    });
    await loading.present();

    this.pahlawanservice.getPahlawanById(this.pahlawanId).subscribe(pahlawan => {
      if (pahlawan) {
        this.pahlawanForm.patchValue(pahlawan);
      }
      loading.dismiss();
    });
  }

  async onSubmit() {
    if (this.pahlawanForm.valid) {
      const loading = await this.loadingCtrl.create({
        message: 'Saving...'
      });
      await loading.present();

      try {
        if (this.isEditing) {
          await this.pahlawanservice.updatePahlawan(this.pahlawanId, this.pahlawanForm.value);
        } else {
          await this.pahlawanservice.addPahlawan(this.pahlawanForm.value);
        }

        const toast = await this.toastCtrl.create({
          message: `Pahlawan berhasil ${this.isEditing ? 'diupdate' : 'ditambahkan'}`,
          duration: 2000
        });
        await toast.present();

        this.router.navigate(['/pahlawan-list']);
      } catch (error) {
        const toast = await this.toastCtrl.create({
          message: 'Terjadi kesalahan',
          duration: 2000,
          color: 'danger'
        });
        await toast.present();
      }

      loading.dismiss();
    }
  }

}
