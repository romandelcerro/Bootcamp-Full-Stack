import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { Barco } from 'src/app/Modelo/Barco';
import { Socio } from 'src/app/Modelo/Socio';
import { ServiceService } from 'src/app/Service/service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-editarbarco',
  templateUrl: './editarbarco.component.html',
  styleUrls: ['./editarbarco.component.css']
})
export class EditarbarcoComponent {

  socio: Socio=new Socio();
  socios: Socio[] = [];
  barco: Barco = new Barco();

  socioId:number;

  constructor(private router:Router, private service:ServiceService){

  }

  asignarSocioId(): void {
    this.barco.socio_id = this.socioId
    console.log(this.barco.socio_id);
  }

  ngOnInit(){
   
    this.service.getSocios()
    .pipe(
      tap((socios: Socio[]) =>{
        this.socios = socios;
      })
    )
    .subscribe();
    this.Editar();
    
  }

  Editar(){
    let num_matricula = localStorage.getItem("num_matricula");
    if (num_matricula) {
      this.service.getBarcoId(num_matricula)
        .subscribe(data => {
          this.barco = data;
          this.socioId = this.barco.socio_id;
        });
      
    }

  }
  
  Actualizar(barco:Barco){
    this.service.updateBarco(barco)
    .subscribe(data => {
        this.barco = data;
        swal({
          title: 'Éxito',
          text: 'Barco actualizado correctamente',
          type: 'success',
          confirmButtonText: 'Aceptar'
        });
        
        this.router.navigate(["v0/clubnautico/barcos"]);
      });
  }
}
