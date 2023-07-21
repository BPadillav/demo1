import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-list-contactos',
  templateUrl: './list-contactos.component.html',
  styleUrls: ['./list-contactos.component.scss']
})
export class ListContactosComponent implements OnInit{

  listadoContactos: Contacto[] = []
  listadoContactosFire: any;
  listadoContactosWS: any;

  constructor(private contactoService: ContactoService,
      private personasService: PersonasService,
      private router: Router) {
    this.listadoContactos = contactoService.getList()
    console.log('listadoContactos', this.listadoContactos)
    this.listadoContactosFire = contactoService.getAll()
    
  }
  ngOnInit(): void {
    this.listadoContactosWS = this.personasService.getAll()
  }

  editar(contacto: Contacto){
    console.log(contacto)
    let params: NavigationExtras = {
      queryParams: {
        contacto: contacto,
        nombre: 'Cristian'
      }
    }
    this.router.navigate(['paginas/nuevo-contacto'], params)
  }

  eliminar(cedula: string) {
    this.personasService.delete(cedula).subscribe(
      (response) => {
       
        console.log('Persona eliminada correctamente', response);
        this.listadoContactosWS = this.personasService.getAll()
      },
      (error) => {
        console.error('no elimina')
        console.error('Error al eliminar persona:', error);
      }
    );

  }
 
}