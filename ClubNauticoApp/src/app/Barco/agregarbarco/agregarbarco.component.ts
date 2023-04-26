import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Barco } from 'src/app/Modelo/Barco';
import { Socio } from 'src/app/Modelo/Socio';
import { ServiceService } from 'src/app/Service/service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-agregarbarco',
  templateUrl: './agregarbarco.component.html',
  styleUrls: ['./agregarbarco.component.css']
})
export class AgregarbarcoComponent {

  socios: Socio[] = [];
  barco: Barco = new Barco();
  socio:Socio = new Socio();
  socioId: number;

  

  constructor(private router:Router, private service:ServiceService){
    
  }

  ngOnInit(){
    this.service.getSocios()
    .pipe(
      tap((socios: Socio[]) => this.socios = socios)
    )
    .subscribe();

    
  }

  asignarSocioId(): void {
    this.barco.socio_id = this.socioId;
  }

  Guardar(barco:Barco){
    this.asignarSocioId();
    this.service.createBarco(barco)
    .subscribe(data=>{
      swal({
        title: 'Éxito',
        text: 'Barco agregado correctamente',
        type: 'success',
        confirmButtonText: 'Aceptar'
      });
      this.router.navigate(['v0/clubnautico/barcos']);
    })
    
  }
}
