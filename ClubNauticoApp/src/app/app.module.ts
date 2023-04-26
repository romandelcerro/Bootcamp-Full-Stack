import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Socio/listar/listar.component';
import { AgregarComponent } from './Socio/agregar/agregar.component';
import { EditarComponent } from './Socio/editar/editar.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListarbarcoComponent } from './Barco/listarbarco/listarbarco.component';
import { AgregarbarcoComponent } from './Barco/agregarbarco/agregarbarco.component';
import { EditarbarcoComponent } from './Barco/editarbarco/editarbarco.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    ListarbarcoComponent,
    AgregarbarcoComponent,
    EditarbarcoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
