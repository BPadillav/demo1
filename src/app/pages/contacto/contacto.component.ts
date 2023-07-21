

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  contacto: Contacto = new Contacto();

  constructor(private contactoService: ContactoService,
    private personasService: PersonasService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.contacto = new Contacto()
        this.contacto = params['contacto']
      }
    }

  guardar() {
    console.log(this.contacto)
    // antes firebase --> this.contactoService.save(this.contacto)
    this.personasService.save(this.contacto).subscribe(data => {
      console.log("resultado WS save", data);
    });
    this.contacto = new Contacto()
  }
}