import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Bicicleta } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getBicis(): Observable<Bicicleta[]> {
    const biciRef = collection(this.firestore, 'bicicletas');
    return collectionData(biciRef, { idField: 'id'}) as Observable<Bicicleta[]>;
  }

  getBiciById(id): Observable<Bicicleta> {
    const biciRef = doc(this.firestore, `bicicletas/${id}`);
    return docData(biciRef, { idField: 'id' }) as Observable<Bicicleta>;
  }

  addBici(bicicleta: Bicicleta) {
    const biciRef = collection(this.firestore, 'bicicletas');
    return addDoc(biciRef, bicicleta);
  }

  deleteBici(bicicleta: Bicicleta) {
    const biciRef = doc(this.firestore, `bicicletas/${bicicleta.id}`);
    return deleteDoc(biciRef);
  }

  updateBici(bicicleta: Bicicleta) {
    const biciRef = doc(this.firestore, `bicicletas/${bicicleta.id}`);
    return updateDoc(biciRef, { marca: bicicleta.marca, modelo: bicicleta.modelo, color:bicicleta.color, imagen: bicicleta.imagen});
  }
}
