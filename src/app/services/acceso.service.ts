import { Injectable } from '@angular/core';
import { Firestore} from '@angular/fire/firestore';
import { Usuario, UsuarioRegister } from '../interfaces/interface';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AccesoService {
  constructor(private firestore: Firestore, private router:Router) { }

  login(usuario:Usuario){
    const auth = getAuth();
signInWithEmailAndPassword(auth, usuario.email, usuario.password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    this.router.navigateByUrl('menu');
    // ...
  })
  .catch((error) => {
    console.log('error');
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  }

  registro(usuario:UsuarioRegister){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, usuario.email, usuario.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('usuario creado');
  })
  .catch((error) => {
    console.log(error);
  });
  }
}
