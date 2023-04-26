import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Barco } from 'src/app/Modelo/Barco';
import { ServiceService } from 'src/app/Service/service.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-listarbarco',
  templateUrl: './listarbarco.component.html',
  styleUrls: ['./listarbarco.component.css']
})
export class ListarbarcoComponent {

  pageActual: number = 1;
  barcos: Barco[] = [];

  constructor(private service:ServiceService, private router:Router) {}

  ngOnInit(){
    this.service.getBarcos()
    .pipe(
      tap((barcos:Barco[]) => this.barcos = barcos)
    )
    .subscribe();
  }

  Nuevo(){
    this.router.navigate(['v0/clubnautico/barcos/agregar']);
  }

  Delete(barco:Barco){
    swal({
      title: '¿Estás seguro?',
      text: 'Confirma si deseas eliminar el barco',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar',
      cancelButtonText: 'No, Cancelar',
      confirmButtonClass: 'btn btn-success',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.service.deleteBarco(barco)
        .subscribe(data=>{
          this.barcos = this.barcos.filter(s => s!== barco);
          swal(
            'Barco eliminado con éxito',
            'El barco ha sido eliminado con éxito',
            'success'
          )
        })
      }
    })
    
    
  }

  Editar(barco: Barco):void {
    localStorage.setItem("num_matricula", barco.num_matricula);
    this.router.navigate(["v0/clubnautico/barcos/editar"]);
    
  }
}
