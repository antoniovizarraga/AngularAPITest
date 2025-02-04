import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  /*URL de mi aPI para usar en todo el Servicio*/
  urlWebAPI='https://antoniocrudasp.azurewebsites.net/API/Personas';

  constructor() { }

  http = inject(HttpClient);

  servicioGetPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.urlWebAPI);
  }

  // EL resto de verbos es parecido al del get

}
