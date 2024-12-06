import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  credentials = {
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  async register() {
    if (this.credentials.password !== this.credentials.confirmPassword) {
      const toast = await this.toastController.create({
        message: 'Password tidak cocok!',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Membuat akun...',
      spinner: 'crescent',
    });
    await loading.present();

    try {
      await this.authService.register(this.credentials.email, this.credentials.password);
      await loading.dismiss();
      
      const toast = await this.toastController.create({
        message: 'Registrasi berhasil!',
        duration: 2000,
        color: 'success'
      });
      toast.present();
      
      this.router.navigate(['/login']);
    } catch (error) {
      await loading.dismiss();
      const toast = await this.toastController.create({
        message: 'Registrasi gagal. Silakan coba lagi.',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}