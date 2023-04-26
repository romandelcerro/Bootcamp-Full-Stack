import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Socio } from 'src/app/Modelo/Socio';
import { ServiceService } from 'src/app/Service/service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent {

  modelSocio=new Socio();

  constructor(private router:Router, private service:ServiceService){
    
  }

  ngOnInit(){
    
  } 

  Guardar(socio:Socio){
    this.service.createSocio(socio)
    .subscribe(data=>{
      swal({
        title: 'Éxito',
        text: 'Socio agregado correctamente',
        type: 'success',
        confirmButtonText: 'Aceptar'
      });
      this.router.navigate(['v0/clubnautico/socios']);
    })
    
  }
}
