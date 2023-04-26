import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Socio } from 'src/app/Modelo/Socio';
import { ServiceService } from 'src/app/Service/service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  socio: Socio=new Socio();
  constructor(private router:Router, private toastr:ToastrService, private service:ServiceService){

  }

  ngOnInit(){
    this.Editar();
  }

  
  Editar(){
    let id = localStorage.getItem("id");
    if (id) {
      this.service.getSocioId(+id)
        .subscribe(data => {
          this.socio = data;
        });
      
    }

  }
  
  Actualizar(socio:Socio){
    this.service.updateSocio(socio)
    .subscribe(data => {
        this.socio = data;
        swal({
          title: 'Éxito',
          text: 'Socio actualizado correctamente',
          type: 'success',
          confirmButtonText: 'Aceptar'
        });
        
        this.router.navigate(["v0/clubnautico/socios"]);
      });
  }

}
