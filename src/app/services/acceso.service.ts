import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UsuarioRegister } from '../interfaces/interface';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})

export class AccesoService {
  constructor(private firestore: Firestore) { }


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
