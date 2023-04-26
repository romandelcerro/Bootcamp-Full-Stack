import { Empleado } from "./empleado.model";
import { Injectable } from '@angular/core';
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService){

    }

    empleados:Empleado[] = [
        new Empleado("Mario", "Román", "Presidente", 7500),
        new Empleado("Jesús", "Bravo", "Limpieza", 500),
        new Empleado("Juan", "Martín", "Fontanero", 1100),
        new Empleado("Natalia", "López", "Administrativo", 2200),
    
      ];

      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" + empleado.nombre + "\n" + "Salario: " + empleado.salario);
        this.empleados.push(empleado);
      }

      encontrarEmpleado(indice:number){
        let empleado:Empleado = this.empleados[indice];

        return empleado;
      }

      actualizarEmpleado(indice:number, empleado:Empleado){
        let empleadoModificado= this.empleados[indice];

        empleadoModificado.nombre=empleado.nombre;
        empleadoModificado.salario=empleado.salario;
        empleadoModificado.apellido=empleado.apellido;
        empleadoModificado.cargo=empleado.cargo;
      }

      eliminarEmpleado(indice:number){
        this.empleados.splice(indice,1);
      }
}