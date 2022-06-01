import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http: HttpClient) { }


  getUsuarioRedes(){
    return this.http.get('http://localhost:3000/grafica');
  }


  getUsuariosRedesDona(){
    return this.getUsuarioRedes()
    .pipe(
      delay(1500),
      map(data=>{
        return{
          labels: Object.keys(data),
          datasets: [{ data: Object.values(data) }],
        };
      })

    );
  }



}
