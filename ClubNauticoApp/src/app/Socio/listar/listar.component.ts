import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';
import { Socio } from 'src/app/Modelo/Socio';
import { ServiceService } from 'src/app/Service/service.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  pageActual: number = 1;
  socios: Socio[] = [];

  constructor(private service:ServiceService, private router:Router) {}

  ngOnInit(){
    this.service.getSocios()
    .pipe(
      tap((socios: Socio[]) => this.socios = socios)
    )
    .subscribe();
  }

  Editar(socio: Socio):void {
    localStorage.setItem("id", socio.id.toString());
    this.router.navigate(["v0/clubnautico/socios/editar"]);
    
  }

  Delete(socio:Socio){
    swal({
      title: '¿Estás seguro?',
      text: 'Confirma si deseas eliminar al socio',
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
        this.service.deleteSocio(socio)
        .subscribe(data=>{
          this.socios = this.socios.filter(s => s!== socio);
          swal(
            'Socio eliminado con éxito',
            'El socio ha sido eliminado con éxito',
            'success'
          )
        })
      }
    })
    
    
  }

  Nuevo(){
    this.router.navigate(['v0/clubnautico/socios/agregar']);
  }
}
