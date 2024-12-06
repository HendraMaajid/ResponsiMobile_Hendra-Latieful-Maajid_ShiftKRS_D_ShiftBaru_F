import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  credentials = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  async login() {
    const loading = await this.loadingController.create({
      message: 'Logging in...',
      spinner: 'crescent',
    });
    await loading.present();

    try {
      await this.authService.login(this.credentials.email, this.credentials.password);
      await loading.dismiss();
      this.router.navigate(['/pahlawan-list']);
    } catch (error) {
      await loading.dismiss();
      const toast = await this.toastController.create({
        message: 'Login gagal. Silakan periksa email dan password Anda.',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}