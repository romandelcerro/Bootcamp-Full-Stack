import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './Socio/editar/editar.component';
import { AgregarComponent } from './Socio/agregar/agregar.component';
import { ListarComponent } from './Socio/listar/listar.component';
import { ListarbarcoComponent } from './Barco/listarbarco/listarbarco.component';
import { AgregarbarcoComponent } from './Barco/agregarbarco/agregarbarco.component';
import { EditarbarcoComponent } from './Barco/editarbarco/editarbarco.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'v0/clubnautico/inicio', component: HomeComponent},
  {path: '', redirectTo:'v0/clubnautico/inicio', pathMatch: "full"},
  {path: 'v0/clubnautico/socios', component: ListarComponent},
  {path: 'v0/clubnautico/socios/agregar', component: AgregarComponent},
  {path:'v0/clubnautico/socios/editar', component: EditarComponent},
  {path:'v0/clubnautico/barcos', component: ListarbarcoComponent},
  {path:'v0/clubnautico/barcos/agregar', component: AgregarbarcoComponent},
  {path: 'v0/clubnautico/barcos/editar', component: EditarbarcoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
