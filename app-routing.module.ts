import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarComponent } from './consultar/consultar.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  {
    path: '', component: InicioComponent
  },
  {
    path: 'registrar', component: RegistrarComponent
  },
  {
    path: 'consultar', component: ConsultarComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
