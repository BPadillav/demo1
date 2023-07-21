import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private dbPath = '/contactos'; 
  contactos: Contacto[] = []

  contactosRef: AngularFirestoreCollection<Contacto>;

  constructor(private db: AngularFirestore) {
    this.contactosRef = db.collection(this.dbPath);
  }

  save(contacto: Contacto){
    this.contactos.push(contacto)
    console.log(this.contactos)
    //contacto.uid = this.db.createId()
    this.create(contacto)
  }

  getList(){
    return this.contactos
  }

  
  getAll() {
    return this.contactosRef.valueChanges();
  }

  create(contacto: Contacto): any {
    //return this.contactosRef.doc(contacto.uid).set({ ...contacto });
  }

  update(id: string, data: any): Promise<void> {
    return this.contactosRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.contactosRef.doc(id).delete();
  }
}