/* eslint-disable eqeqeq */
import { Injectable } from '@angular/core';
import { Firestore} from '@angular/fire/firestore';
import { Usuario, UsuarioRegister } from '../interfaces/interface';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class AccesoService {
  constructor(private firestore: Firestore, private router: Router,private alertController: AlertController) { }

  login(usuario: Usuario){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, usuario.email, usuario.password)
  .then((userCredential) => {
    const user = userCredential.user;
    localStorage.setItem('uid',user.uid);
    this.router.navigateByUrl('menu');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    this.showAlert();
  });

  }

  registro(usuario: UsuarioRegister){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, usuario.email, usuario.password)
  .then((userCredential) => {
    const user = userCredential.user;
    localStorage.setItem('uid',user.uid);
    this.router.navigateByUrl('menu');
  })
  .catch((error) => {
    this.showAlert();
  });
  }


  getUsarioSesion(){
    const uid = localStorage.getItem('uid');
    const auth = getAuth();
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) =>{
        if (user.uid == uid) {
          resolve(true);
        }else{
          resolve(false);
        }
      });
    });
  }

  showAlert() {
    this.alertController.create({
      header: 'Error',
      subHeader: 'Los datos introducidos no son correctos',
      message: 'Inténtelo otra vez',
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
