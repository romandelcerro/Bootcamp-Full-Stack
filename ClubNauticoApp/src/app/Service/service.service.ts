import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Socio } from '../Modelo/Socio';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Barco } from '../Modelo/Barco';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/v0/clubnautico/socios';
  Url2 = 'http://localhost:8080/v0/clubnautico/barcos';

  getSocios(): Observable<Socio[]> {
    return this.http.get<{contenido: Socio[]}>(this.Url).pipe(map(respuesta => respuesta.contenido));
  }

  getBarcos(): Observable<Barco[]> {
    return this.http.get<Barco[]>(this.Url2);
  }
  

  createSocio(socio:Socio){
    return this.http.post<Socio>(this.Url, socio);
  }

  createBarco(barco:Barco){
    return this.http.post<Barco>(this.Url2, barco);
  }

  getSocioId(id:number){
    return this.http.get<Socio>(this.Url+"/"+id);
  }

  getBarcoId(num_matricula:string){
    return this.http.get<Barco>(this.Url2+"/"+num_matricula);
  }

  updateSocio(socio:Socio){
    return this.http.put<Socio>(this.Url, socio);
  }

  updateBarco(barco:Barco){
    return this.http.put<Barco>(this.Url2, barco);
  }

  deleteSocio(socio:Socio){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: socio
    };
    return this.http.delete<Socio>(this.Url, options);
  }

  deleteBarco(barco:Barco){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: barco
    };
    return this.http.delete<Barco>(this.Url2, options);
  }

}
