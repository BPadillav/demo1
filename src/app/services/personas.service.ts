import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  save(contacto: Contacto) {
    return this.http.post<any>("http://localhost:8080/demo/rs/clientes/personas1", contacto)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/demo/rs/clientes/all")
  }
  
  delete(cedula: string) {
    console.log(cedula)
    const url = `http://localhost:8080/demo/rs/clientes/eliminar`;
    const options = {
      body: { cedula }
    };
    console.log('eliminar')
    console.log(options)
    return this.http.delete<any>(url,options);
  }

  update(id: number, contacto: Contacto) {
    return this.http.put<any>("http://localhost:8080/demo/rs/clientes/actualizar",contacto);
  }


}