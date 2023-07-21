import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContactosComponent } from './pages/list-contactos/list-contactos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {path: "paginas/listacontactos", component: ListContactosComponent},
  {path: "paginas/nuevo-contacto", component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }