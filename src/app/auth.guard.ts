/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable eqeqeq */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AccesoService } from './services/acceso.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private servicioAcceso:AccesoService,private alertController: AlertController,
    private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const result = this.servicioAcceso.getUsarioSesion();

      result.then(resp=>{
        if(!resp){
          this.showAlert();
          this.router.navigateByUrl('home');
        }
      });

    return result.then();
  }

  showAlert() {
    this.alertController.create({
      header: 'Error',
      subHeader: 'Debe iniciar sesión',
      cssClass: 'my-custom-class',
      mode: 'ios',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          cssClass: 'alertButton'
        }
      ]
    }).then(res => {
      res.present();
    });

  }


}
